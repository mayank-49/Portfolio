let btn = document.querySelector(".btn");
let body = document.querySelector("body")
let aside = document.querySelector(".aside");
let hLinks = document.querySelectorAll(".h-links");
let h = document.querySelectorAll(".h1");
let grey = document.querySelectorAll(".grey")
let header = document.querySelector(".header");
let switchBtn = document.querySelector(".switch");


btn.addEventListener("click",(e)=>{
    console.log(switchBtn.innerHTML);
    if(switchBtn.innerHTML === "dark"){
        btn.style.backgroundColor = "grey";
        grey.forEach((val)=>{
            val.style.backgroundColor = "rgb(254 212 161 / 69%)"
        })
        h.forEach((val)=>{
            val.style.color = "black";
        })
        hLinks.forEach((val)=>{
            val.style.color = "black";
        })
        // header.style.backgroundColor = "papayawhip";
        switchBtn.innerHTML = "light";
        
    }
    else{
        switchBtn.innerHTML = "dark";
        btn.style.backgroundColor = "white"
        grey.forEach((val)=>{
            val.style.backgroundColor = "rgb(30, 30, 30,0.817)"
        })
        h.forEach((val)=>{
            val.style.color = "rgba(246, 165, 223, 0.9)"
        })
        hLinks.forEach((val)=>{
            val.style.color = "white";
        })
        // header.style.backgroundColor = "black";
    }
    header.classList.toggle("header-light");
    body.classList.toggle("light-mode");
    aside.classList.toggle("aside-light");
    
})