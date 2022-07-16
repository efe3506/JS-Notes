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


//Scroll to top

//değişkenler
const scrollBtn = document.querySelector('.top');
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTop);

function showBtn(){
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;

    if(rootEl.scrollTop / scrollTotal > 0.3){
        scrollBtn.classList.add('show-btn');
    } else{
        scrollBtn.classList.remove('show-btn');
    }
}

function scrollToTop(){
    rootEl.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
