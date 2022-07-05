'use strict'

//*Objelerimizi kolay ulaşmak için değişkenlere atıyoruz

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


//*İkiye ayırdığımız ekranda basitçe mouse sürüklemesiyle genişliğin değişmesi için eventListener'a classList.add/remove çalıştırıyoruz
left.addEventListener("mouseenter", ()=> container.classList.add('hover-left'));
left.addEventListener("mouseleave", ()=> container.classList.remove('hover-left'));

right.addEventListener("mouseenter", ()=> container.classList.add('hover-right'));
right.addEventListener("mouseleave", ()=> container.classList.remove('hover-right'));