'use strict';

//HTML'de ulaşacağımız class'ları kullanım kolaylığı ve DRY prensibi için bir değişkene atayıyoruz
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// console.log(btnShowModal);

//Event listener ile sınıf eklemesi ve çıkartması yaparak etkileşimi gerçekleştiriyoruz

//Döngü kurmamızın sebebi aynı class'a sahip 3 div'in olması. Yoksa sadece ilkini etkiler

// for(let i = 0; i < btnShowModal.length ; i++){
//     btnShowModal[i].addEventListener("click", function(){
//         modal.classList.remove('hidden') //parantez içerisinde virgül kullanarak birden fazla class kaldırabiliriz
//         overlay.classList.remove('hidden');
//     });
// };

// btnCloseModal.addEventListener("click", function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener("click", function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });


const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener("keydown", function(e){
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains("hidden"))
        closeModal()
})



