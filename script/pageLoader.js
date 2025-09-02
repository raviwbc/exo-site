console.log(window.location.pathname)

function  menuActive(){
    let path = window.location.pathname;
    let tagname = document.getElementsByTagName("nav");
    console.log(tagname.length);
    if (tagname.length == 0) {
        setTimeout(()=>{
            menuActive();
        },10)
    } else {
        let newList = tagname[0].getElementsByTagName('a');
        console.log(newList)
        Array.from(newList).forEach((element) => {
            console.log(element.getAttribute("menu"));
            if(path.includes(element.getAttribute("menu"))){
                element.classList.add('active');
            }else{
                element.classList.remove('active')
            }
        });
    }
}
menuActive();