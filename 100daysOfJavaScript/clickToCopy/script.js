'use strict'

//*Değişkenler
const btn = document.querySelector('.btn');
const copy = document.querySelector('.copy');


//*eventListener ile çağırılacak fonksiyon 
const copyText = function(e) {
  //buttona tıklayınca sayfa yenilenmesini engellemek için preventDefault
    e.preventDefault();
   
    //navigator tarayıcının algılanması için, clipboard API'si, tarayıcı arabirimine clipboard içeriğini okumak ve yazma özelliğini için, writeText ise belirtilen metini sisteme yazar 
    navigator.clipboard.writeText(copy.value).then(() => {
        btn.textContent = "Copied!";
        
        setTimeout(() => {
            btn.textContent = "Copy"
        }, 3000);
    })

};

btn.addEventListener("click", copyText);
