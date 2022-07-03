'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const p = document.querySelector('.p');
// p.textContent = 'Benim adım Murat';
// alert('Hazır Metin');
// p.style.color = 'red';

// const p = document.querySelector('.p');
// setTimeout(function () {
//   p.textContent = 'Benim adım Murat';
// }, 5000);
// p.style.color = 'red';

// function testFonksiyon() {
//   console.log('setTimeout fonksiyonu çalıştı');
// }
// setTimeout(testFonksiyon, 3000);

// let sayılar = [1, 2, 3, 5, 8, 10];

// let yeniDizi = sayılar.map(function (değer) {
//   return değer * 5;
// });

// console.log(yeniDizi.toString());
// [1, 2, 3].map(v => v + 2);

// const img = document.querySelector('.dog');
// img.src = 'dog.jpg';
// img.addEventListener('load', function () {
//   img.classList.add('fadeIn');
// });

// p.style.width = '300px';

// function Kullanici(isim) {
//   this.isim = isim;
//   this.yöneticiMi = false;
// }

// let kullanici = new Kullanici('Murat');

// alert(kullanici.isim);
// alert(kullanici.yöneticiMi);

// function Kullanici(isim) {
//  //this = {}
//  // bu nesneye yeni özellikler ekle
//   this.isim = isim;
//   this.yöneticiMi = false;
//   // return this;
// }

// let kullanici = new Kullanici('Murat');

// // let kullanici = {
// //  isim : "Murat",
// //  yöneticiMi : false,
// // }
// new Kullanici("Namık")

// alert(kullanici.isim);
// alert(kullanici.yöneticiMi);

// const ülkeBilgisiAl = function (ülke) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${ülke}`);
//   request.send();
//   // console.log(request.responseText);
//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     // const data = JSON.parse(this.responseText)[0];
//     console.log(data);
//     const languages = Object.values(data.languages);
//     console.log(languages);
//     const currencies = Object.values(data.currencies);
//     console.log(currencies[0]);
//     const html = `  <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//             <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// ülkeBilgisiAl('turkey');
// ülkeBilgisiAl('italy');
// ülkeBilgisiAl('germany');

const ülkeyiGöster = function (data, className = '') {
  const languages = Object.values(data.languages);
  // console.log(languages);
  const currencies = Object.values(data.currencies);
  // console.log(currencies[0]);
  const html = `  <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${languages[0]}</p>
            <p class="country__row"><span>💰</span>${currencies[0].name}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const ülkeVeKomşuÜlkeBilgisiAl = function (ülke) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${ülke}`);
  request.send();
  // console.log(request.responseText);
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    // const data = JSON.parse(this.responseText)[0];
    // console.log(data);
    //1.Ülkeyi Göster
    ülkeyiGöster(data);
    //Komşu Ülkeyi Al
    const [komşu] = data.borders;
    if (!komşu) return;
    //2. Ajax çağrısı yap
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${komşu}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      // console.log(data2);
      ülkeyiGöster(data2, 'neighbour');
      // console.log(this.responseText);
    });
  });
};
// ülkeVeKomşuÜlkeBilgisiAl('finland');
//--------Object Methodları Başlangıç-----------------

// let kullanıcı = {
//   adı : "Murat",
//   yaşı: 36
// }

// Object.keys(kullanıcı) ==> [adı,yaşı]
// Object.values(kullanıcı) ==> ["Murat", 36]
// Object.entries(kullanıcı) ==> [["adı","Murat"], ["yaşı", 36]]

//Örnek2
// const object1 = {
//   a: 'Metin',
//   b: 42,
//   c: false,
// };

// console.log(Object.keys(object1));
// console.log(Object.values(object1));
// console.log(Object.entries(object1));

//--------Object Methodları Bitiş-----------------
// let personel = {
//   adi: 'Murat',
//   soyadi: 'Akdağ',
// };

// let isim = personel.adi;
// let surname = personel.soyadi;
// let { isim: adi, surname: soyadi } = personel;
// console.log(isim, surname);

// let personel = ['Murat', 'Namık', 'Berna'];
// // let p1 = personel[0];
// // let p2 = personel[1];
// // let p3 = personel[2];
// // console.log(p1, p2, p3);

// let [p1, p2, p3] = personel;
// console.log(p1, p2, p3);

//--------setTimeout CallBack Hell start---------------

// setTimeout(()=>{
//   console.log('1sn geçti');
//   setTimeout(()=>{
//     console.log('2sn geçti');
//     setTimeout(() =>{
//       console.log('3sn geçti');
//       setTimeout(()=>{
//         console.log('4sn geçti');
//       },1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

//--------setTimeout CallBack Hell end---------------

//*-------Promise && Fetch API Start------------

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${ülke}`);
//   request.send();

// const request = fetch('https://restcountries.com/v3.1/name/turkey')
// console.log(request);

// const ülkeBilgisiAl = function(ülke){
//   fetch(`https://restcountries.com/v3.1/name/${ülke}`).then(function(response){
//     console.log(response);
//     return response.json()
//   }).then(function(data){
//     console.log(data);
//     ülkeyiGöster(data[0])
//   });
// };

const ülkeBilgisiAl = function (ülke) {
  fetch(`https://restcountries.com/v3.1/name/${ülke}`)
    .then(response => response.json()
    //, err => alert(err)
    )
    .then(data => {
      ülkeyiGöster(data[0]);
      const komşu = data[0].borders[0];
      if(!komşu) return;
      //ülke2
      return fetch(`https://restcountries.com/v3.1/alpha/${komşu}`)
      // return 23
    }).then(response => response.json())//err => alert(err) yerine
    .then(data => ülkeyiGöster(data[0], 'neighbour')).catch(err => console.log(`${err} 💢💥`))
    // .then(data => alert(data));
};
//?arrow functionlar kendisi return ettiği için yazamamıza gerek yok.

btn.addEventListener('click', function(){
  ülkeBilgisiAl('turkey');

})


//*-------Promise && Fetch API end------------
