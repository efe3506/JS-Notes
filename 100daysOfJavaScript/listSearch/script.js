'use strict'

//değişkenler
const input = document.getElementById('search');

//evenListener tuşa basıldığında
input.addEventListener("keydown", search);

function search(){
    //inpu değerini ve list itemleri al
    const inputVal = input.value;
    const li = document.getElementsByTagName('li');


    //yazılan karakter içeriyorsa göster, içermiyorsa sakla
    for(let i = 0; i < li.length; i++){
        if(li[i].innerHTML.toLowerCase().includes(inputVal)){
            li[i].style.display = "";
        } else{
            li[i].style.display = "none";
        }
    }
}