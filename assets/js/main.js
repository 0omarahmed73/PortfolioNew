let texts1 = document.getElementById("texts1")
let span = document.getElementById("spanmen")
let mobnav = document.getElementById("mobnav")
let body = document.querySelector(".divs");
let bod1 = document.querySelector("body");
let nav = document.querySelector("nav")
console.log(body)
console.log(texts1)

window.addEventListener("scroll" , (eo) => {
    if(this.scrollY >= 300){
        // texts1.style.opacity = "1";
        texts1.style.position = "absolute"
        texts1.style.right = "0";

    }
    else {
        // texts1.style.opacity = "0";
        texts1.style.position ="absolute"
        texts1.style.right = "20000px";


    }
})

span.addEventListener("click" , (eo) => {
    mobnav.classList.toggle("click")
    body.classList.toggle("click")
})
body.addEventListener("click" , (eo) => {
    mobnav.classList.remove("click")
    body.classList.remove("click")
})