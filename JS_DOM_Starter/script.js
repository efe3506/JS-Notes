'use strict';

//reverse([1,3,5,7]) ==> [5,1,7,3]

// const ölçümKelvin = function () {
//   const ölçüm = {
//     tür: 'sıcaklık',
//     birim: 'santigrat',
//     //C- Hatayı Düzeltmek
//     değer: Number(prompt('Santigrat derece:')),
//   };
//   //B- Hatayı Bulmak
//   console.log(ölçüm);
//   // console.table(ölçüm);
//   console.log(ölçüm.değer);
//   // console.warn(ölçüm.değer);
//   // console.error(ölçüm.değer);
//   const kelvin = ölçüm.değer + 273;
//   return kelvin;
// };
// //A- Hatayı Tanımlamak
// console.log(ölçümKelvin());

//--------Challenge 33 Start-------

//Sorunu Anlamak

//1. Dizideki değerler dizeye dönüştürülmüş ve üç nokta ile ayrılmış
// 2. X günler nedir ? : index + 1

//Alt Problemler
// Diziyi bir dizeye dönüştürmek
//Her bir öğeyi dize için Santigrat ile dönüştürelim
//Dizenin gün içermesi gerekiyor(index + 1)
//Elementlerin arasında ve dizenin başlangıç ve bitişinde üç noktayı eklememiz gerekiyor

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// // console.log(`...${data1[0]}C...${data1[1]}C...${data1[2]}C...`);

// //"...1. gün 17ºC...2. gün 21ºC...3. gün 23ºC... "
// const havaTahmini = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${i + 1}.günde ${arr[i]}C...`;
//   }
//   console.log('...' + str);
// };
// havaTahmini(data1);

//9
//[2,3,4]

//--------Challenge 33 End---------
