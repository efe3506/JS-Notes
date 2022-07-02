'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const p = document.querySelector('.p');
// p.textContent = 'Benim adım Murat';
// alert('Hazır Metin');
// p.style.color = 'red';


//setTimeout()
// const p = document.querySelector('.p');
// setTimeout(function(){
//     p.textContent = 'Benim adım Murat';
// }, 5000)
// p.style.color = 'red';



// function testFonksiyon(){
//     console.log('setTimeout fonk. çalıştı');
// }

// setTimeout(testFonksiyon, 3000);

//map()
// let sayılar = [1,2,3,4,5,6,7,8,9];

// let yeniDizi = sayılar.map(function(değer){
//     return değer * 5;
// })

// console.log(yeniDizi.toString());


// [1,2,3].map(v => v + 2);

// const img = document.querySelector('.dog');
// img.src = 'dog.jpg';
// img.addEventListener('load', function () {
//   img.classList.add('fadeIn');
// });


// p.style.width = '300px';

// new XMLHttpRequest()

// function Kullanıcı(isim){
//     this.isim = isim;
//     this.yöneticiMi = false
// }

// let kullanıcı = new Kullanıcı('Efe')

// alert(kullanıcı.isim)
// alert(kullanıcı.yöneticiMi)



// function Kullanıcı(isim){
//     //this = {}
//     //bu nesneye yeni özellikler ekle
//     this.isim = isim;
//     this.yöneticiMi = false
//     // return this;
// }

// let kullanıcı = new Kullanıcı('Efe')
// new Kullanıcı("Namık")
// // let kullanıcı ={
// //     isim: 'Efe',
// //     yöneticiMi: false,
// // }

// alert(kullanıcı.isim)
// alert(kullanıcı.yöneticiMi)

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/turkey");
request.send()
request.addEventListener("load", function(){
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    // const data = JSON.parse(this.responseText)[0];
    console.log(data);
    const html = ` <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages.tur}</p>
      <p class="country__row"><span>💰</span>${data.currencies.TRY.name}</p>
    </div>
  </article> `;
  countriesContainer.insertAdjacentHTML("beforeend",html);
  countriesContainer.style.opacity = 1;
})


//destructor yapısı örnek
// let personel = {
//     adi: 'murat',
//     soyadı: 'Akdağ',
// };

// let isim = personel.adi
// let soyisim = personel.soyadı

// // let{adi, soyadı} = personel;
// let{isim: adi, soyisim: soyadı} = personel;
// console.log(isim, soyisim);

// let personel = ["Efe", "Namık", "Berna"];
// // let p1 = personel[0];
// // let p2 = personel[1];
// // let p3 = personel[2];
// // console.log(p1, p2, p3);

// let [p1, p2, p3] = personel;
// console.log(p1, p2, p3);

