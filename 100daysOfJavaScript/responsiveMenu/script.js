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


//responsive menü

//değişkenler
const menu = document.querySelector('.nav-list');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

function showMenu(){
    hamburger.style.display = 'none';
    close.style.transform = 'translateY(0)';
    //koşul belirtmezsek geniş ekranda menu elemanlarına tıkladığımızda da y ekseni rotasyonu gerçekleşir
    if(hamburger.style.display === 'none'){
        menu.style.transform = 'translateY(0)';
    }
}

function hideMenu(){
    close.style.transform = 'translateY(-20rem)';
    menu.style.transform = 'translateY(-200%)';
    hamburger.style.display = 'block';
    if(hamburger.style.display === 'none'){
        menu.style.transform = 'translateY(0)';
    }
}

hamburger.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu)