"use strict";

//Geri Sayım JS

//Sayac değişkenleri
let time = 5; //Time minutes
let promoTime = time * 60;

//değişkenler
let counting = document.getElementById("countdown");

function startCountdown() {
  let promoTimer = setInterval(() => {
    if (promoTime <= 0) {
      clearInterval(promoTimer);
      counting.innerHTML = `Promosyon süresi bitti ☹`;
    } else {
      promoTime--;
      const days = Math.floor(promoTime / 3600 / 24);
      const hours = Math.floor(promoTime / 3600) % 24;
      const min = Math.floor(promoTime / 60) % 60;
      const sec = Math.floor(promoTime) % 60;

      counting.innerHTML = `Zaman: ${format(hours)}sa: ${format(min)}dk: ${format(sec)}sn`;
    }
  }, 1000);
}

function format(t){
    return t < 5 ? `0${t}`: t;
}

startCountdown();

//Pop-up/Modal
//*Değişkenler
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const btn = document.querySelector('.btn')
const close = document.querySelector('.close');


//*Fonksiyonlar
//openModal
function openModal(){
    modal.style.display = "block"
}

//closeModal
function closeModal(){
    modalContent.classList.add("slide-up")
    //?setTimeout metodu, kendisine belirtilen bir fonksiyonu milisaniye cinsinde belirtilen süre kadar gecikmeli çağırır.ÖR: aşağıda 500ms gecikmeyle içerideki arrow fonksiyonu çağırır.
    setTimeout(() => {
        modal.style.display = "none"
        modalContent.classList.remove("slide-up")
    }, 500)
};

//Gecikmeli açılış fonksiyon

window.onload = function(){setTimeout(openModal, 3500)};

//*evenListeners
close.addEventListener("click", closeModal);
//?ESC tuşuna basılırsa body etiketi içerisinde closeModal fonksiyonunu çağırır
document.body.addEventListener("keydown", e => {
    if(e.key === 'Escape') {
        closeModal();
    }
});

btn.addEventListener("click", openModal)





