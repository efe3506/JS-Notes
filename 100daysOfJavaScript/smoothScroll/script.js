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