let btn = document.querySelector(".btn");
let body = document.querySelector("body")
let aside = document.querySelector(".aside");
let hLinks = document.querySelectorAll(".h-links");
let h = document.querySelectorAll(".h1");
let grey = document.querySelectorAll(".grey")
let header = document.querySelector(".header")



btn.addEventListener("click",(e)=>{
    if(e.target.innerHTML === "Light Mode"){
        btn.style.color = "white";
        btn.style.backgroundColor = "black"
        e.target.innerHTML = "Dark Mode";
        grey.forEach((val)=>{
            val.style.backgroundColor = "rgb(254 212 161 / 69%)"
        })
        h.forEach((val)=>{
            val.style.color = "black";
        })
        hLinks.forEach((val)=>{
            val.style.color = "black";
        })
        header.style.backgroundColor = "papayawhip";
        
    }
    else{
        e.target.innerHTML = "Light Mode";
        btn.style.color = "black";
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
        header.style.backgroundColor = "black";
    }
    console.log(e.target.innerHTML);
    body.classList.toggle("light-mode");
    aside.classList.toggle("aside-light");
    
})