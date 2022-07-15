'use strict'

//değişkenler
const links = document.querySelectorAll('.nav-list li a')


//for...of ifadesi, yinelenebilir nesneler üzerinde yinelenen bir döngü oluşturur
for(let link of links){
    link.addEventListener('click', smoothScroll)
}

function smoothScroll(e){
    e.preventDefault();

    const href = this.getAttribute("href");
    //scrollIntoView() yöntemi, bir öğeyi tarayıcı penceresinin görünür alanına kaydırır.
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}

//---sticky header---
const active = document.querySelector('.active')
//global window'a event ekle => scrollY. Scroll event'i başlar başlamaz tetikle => scrollY > 0
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    // active.style.backgroundColor = "var(--black)";

})


//active menu switcher

const navList = document.querySelector('.nav-list');

navList.addEventListener('click', (e) => {
    e.preventDefault();

    const navLink = e.target.parentElement;
    if(navLink.classList.contains('link')){
        navList.querySelector(".active").classList.remove("active");
        navLink.classList.add("active");
    }
})