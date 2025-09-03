// document.getElementById('contactForm').addEventListener('submit', function (e) {
//   const btn = document.getElementById('submitBtn');
//   const messageBox = document.getElementById('formMessage');

//   btn.disabled = true;
//   btn.textContent = 'Sending...';

//   setTimeout(() => {
//     btn.disabled = false;
//     btn.textContent = 'Send Message';
//   }, 2000);
// });


    function showToast(message, type = "success") {
      toast.textContent = message;
      toast.className = "show " + type;
      
      // Show toast
      setTimeout(() => {
        toast.classList.remove("show");
      }, 5000); // hide after 5 seconds
    }

// document.getElementById("contactForm").addEventListener("submit", function(e) {
//     e.preventDefault(); // stop normal form submit (page reload)

//       const btn = document.getElementById('submitBtn');
//   const messageBox = document.getElementById('formMessage');

//   btn.disabled = true;
//   btn.textContent = 'Sending...';

//     const form = e.target;
//     const formData = new FormData(form);

//     fetch("send.php", {
//         method: "POST",
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//       debugger
//           btn.disabled = false;
//         const responseDiv = document.getElementById("formResponse");
//         if (data.status === "send") {
//             responseDiv.textContent = data.message;
//             responseDiv.style.color = "green";
//             form.reset(); // optional: clear form after success
//         } else {
//             responseDiv.textContent = "Something went wrong!";
//             responseDiv.style.color = "red";
//         }
//     })
//     .catch(error => {
//         document.getElementById("formResponse").textContent = "Error: " + error;
//         document.getElementById("formResponse").style.color = "red";
//     });
// });

 document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
            const btn = document.getElementById('submitBtn');
  const messageBox = document.getElementById('formMessage');

  btn.disabled = true;
  btn.textContent = 'Sending...';

      const formData = new FormData(this);

      fetch("send.php", {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .then(data => {
                  btn.disabled = false;
                      btn.textContent = 'Send Message';
        if (data.status === "send") {
          showToast(data.message, "success");
          this.reset();
        } else {
          showToast(data.message || "Something went wrong", "error");
        }
      })
      .catch(error => {
        showToast("Error: " + error, "error");
      });
    });
