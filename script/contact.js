function showToast(message, type = "success") {
  toast.textContent = message;
  toast.className = "show " + type;

  setTimeout(() => {
    toast.classList.remove("show");
  }, 5000); 
}

function resetRecaptcha() {

    if (grecaptcha) {

        grecaptcha.reset(); // resets the reCAPTCHA widget

    }

}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const btn = document.getElementById("submitBtn");
  const messageBox = document.getElementById("formMessage");

  btn.disabled = true;
  btn.textContent = "Sending...";

  const formData = new FormData(this);

  fetch("send.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
 resetRecaptcha();
      btn.disabled = false;
      btn.textContent = "Send Message";
      if (data.status === "send") {
        showToast(data.message, "success");
        this.reset();
      } else {
        showToast(data.message || "Something went wrong", "error");
      }
    })
    .catch((error) => {
      showToast("Error: " + error, "error");
    });
});
