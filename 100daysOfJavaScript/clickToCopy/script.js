'use strict'

const btn = document.querySelector('.btn');
const copy = document.querySelector('.copy');



const copyText = function(e) {
    e.preventDefault();
   
    navigator.clipboard.writeText(copy.value).then(() => {
        btn.textContent = "Copied!";
        
        setTimeout(() => {
            btn.textContent = "Copy"
        }, 2000);
    })

};

btn.addEventListener("click", copyText);