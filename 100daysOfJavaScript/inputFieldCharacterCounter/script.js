'use strict'

//*Değişkenler
const count = document.querySelector('.count');
const input = document.querySelector('.input');


//*keyup, bir tuşa basılıp bırakıldığında tetiklenir. Input içerisine girilen text tipi girdinin uzunluğunu, ekranda gösterdik.
input.addEventListener("keyup", ()=> {
    count.textContent = input.value.length;
})