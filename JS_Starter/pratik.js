// let aNumber = 13;

// if(aNumber > 10 && aNumber < 50){
//     console.log("10 ile 50 arasında bir sayı")
// }else {
//     console.log("10 ile 50 arasında bir sayı değil!");
// }

// if(aNumber % 2 == 1 && aNumber > 0){
//     console.log("sayı pozitif ve tek sayıdır");
// }else{
//     console.log("sayı tek sayı değil");
// }

// let x = 56;
// let y = 41;
// let z = 23;

// if(x > y && y > z){
//     console.log("x > y > z");
// }else if(x > y && y < z && x > z){
//     console.log("x > z > y");
// }else if(x < y && y > z && z > x){
//     console.log("y > z > x");
// }else{
//     console.log("z > x > y");
// }

// function ortalamaHesabı(a, b, c){
//     const ort =  ((a * 0.20) + (b * 0.20) + (c * 0.60))/3
//     console.log(ort);
//     return ort
// }

// console.log(ortalamaHesabı(50, 40, 70))

// let vize1 = 60
// let vize2 = 30
// let final = 69

// let ort = (((vize1 + vize2) / 2) * 0.40 + final * 0.60) / 3

// console.log("ortalamanız: " + ort);

// if(ort > 50 && final > 50){
//     console.log("dersten geçti");
// }else if(final > 70){
//     console.log("hadi yine iyisin finalden geçtin");
// }else{
//     console.log("kaldın ! Seneye tekrar dene");
// }

// ========================================================

//if/else ================

// const ulke = "İskoçya"
// const nufus = 130 //5.5

// if (nufus > 33){
//     console.log(`${ulke}'nın nüfusu ortalamanın üstünde`);
// }else {
//     console.log(`${ulke}'nin nüfüsü ortalamanın ${33 - nufus} milyon altında`);
// }

//coding exercise 26=====================================

// let muratKilo = 71
// let muratBoy = 1.87
// let enginKilo = 92
// let enginBoy = 1.76

// const muratBMI = muratKilo / muratBoy **2;

// console.log(muratBMI);

// const enginBMI = enginKilo / enginBoy **2;

// console.log(enginBMI);

// if(enginBMI > muratBMI){
//     console.log(`Engin'in BMI(${enginBMI})'ı Murat'ın BMI'ından büyüktür`);
// }else {
//     console.log(`Murat'ın BMI(${muratBMI})'ı Engin'in BMI'ından büyüktür`);
// }

// Type conversion =======================================

// console.log(('9'-'5'), ('19'-'13'+'17'), ('19'-'13'+17), ('123' < 57 ), (5 + 6 + '4' + 9 - 4 - 2));

// equality operators (exercise 127)=======================

// const ulkeKomsu = prompt(`Komsu sayınızı giriniz`);

// if(ulkeKomsu === 1){
//     console.log('Sadece 1 komşu');
// }else if(ulkeKomsu > 1){
//     console.log("1'den fazla komşu");
// }else{
//     console.log("Komşu yok");
// }

// == ile === arasındaki fark: === eşittirde hem değer hem de typeof sorgusu eşit olmak zorunda, == eşittirde değerin eşit olması yeterli

// const age = Number(prompt(`Please enter your age`));

// if(age >= 18){
//     console.log(`you are eligible to vote this year`);
// }else if (age === 100){
//     console.log(`congrats you have reached the age of 100`);
// }else {
//     console.log(`you can apply for voting in ${18- age} years`);
// }

//100'ü number'a çevirsek bile ilk koşul true döneceği için else if bloğuna gitmeden ilk koşulu konsola yazdırır

//Boolean logic exercise ============================

// const dil = 'ingilizce';
// const adaMı = true;
// const nufus = 5

// if(dil === 'ingilizce' && adaMı === false && nufus < 50){
//     console.log(`Tebrikler Engin`);
// }else if(dil === 'ingilizce' && adaMı === false || nufus < 50){
//     console.log(`iki kriterini karşılıyor ama ada`);
// }else {
//     console.log(`başaramadın yine`);
// }

//boolean mantık operatörlerinde && (ve)'nin önceliği vardır ve soldan sağa doğru okunur else if blogunda ilk iki koşulda false döner ancak || (veya) operatöründen sonra true döndüğü için tekrar çıktı true olur

//kodlama#27=========================================

// const kaplanlar1 = 97
// const kaplanlar2 = 112
// const kaplanlar3 = 101

// const kobralar1 = 109
// const kobralar2 = 95
// const kobralar3 = 106

// const kaplanOrt = (kaplanlar1 + kaplanlar2 + kaplanlar3) / 3;
// console.log(kaplanOrt);

// const kobralarOrt = (kobralar1 + kobralar2 + kobralar3) / 3;
// console.log(kobralarOrt);

// if(kaplanOrt > kobralarOrt){
//     console.log(`kaplanlar kazandı`);
// } else if (kobralarOrt == kaplanOrt){
//     console.log(`berabere`);
// } else{
//     console.log(`kobralar kazandı`);
// }

// if(kaplanOrt > kobralarOrt && kaplanOrt >= 100){
//     console.log(`kaplanlar kazandı`);
// } else if (kobralarOrt > kaplanOrt && kobralarOrt >= 100){
//     console.log(`kobralar kazandı`);
// } else if(kobralarOrt == kaplanOrt && kobralarOrt >= 100 && kaplanOrt >= 100){
//     console.log(`berabere`);
// } else{
//     console.log(`bravo hiç kimse kazanamadı`);
// }

//switch case practise ===================================

// const dil = 'arapça'

// switch(dil){
//     case 'çince':
//     case 'mandarin':
//         console.log('çok fazla konuşuluyor');
//         break
//     case 'ispanyolca':
//         console.log('anadil olarak dünyada 2. sırada');
//         break
//     case 'ingilizce':
//         console.log('anadil 3. sıra');
//         break
//     case 'hintçe':
//         console.log('youtuber');
//         break
//     case 'arapça':
//         console.log('yallah habibi');
//         break
//     default:
//         console.log('iyidir iyi');
// }

// ternary operators ======================================

// const ulke = "İskoçya";
// const nufus = 5;

// nufus >= 33
//   ? console.log(`${ulke}'nın nufusu ort üstünde`)
//   : console.log(`${ulke}'nın nufusu ort altında`);

// kodlama #28 ============================================

// const hesap1 = 275;
// const hesap2 = 40;
// const hesap3 = 430;

// hesap1 >= 50 && hesap1 <= 300
//   ? console.log(`${hesap1 * 0.15 + hesap1} kadar ödeme`)
//   : console.log(`${hesap1 * 0.2 + hesap1} kadar ödeme`);

// hesap2 >= 50 && hesap2 <= 300
//   ? console.log(`${hesap2 * 0.15 + hesap2} kadar ödeyiniz`)
//   : console.log(`${hesap2 * 0.2 + hesap2} kadar ödeyiniz`);

// hesap3 >= 50 && hesap3 <= 300
//   ? console.log(`${hesap3 * 0.15 + hesap3} kadar ödeyiniz`)
//   : console.log(`${(hesap3 * 0.2) +hesap3} kadar ödeyiniz`);

//Function practise =============================================

// function ülkeniTanımla(ülke, nüfus, başkent){
//     const tanim = ` ${ülke}'de ${nüfus} kadar insan yaşıyor ve başkenti ${başkent}'dir.`
//     return tanim;
// }

// console.log(ülkeniTanımla('finlandiya', 6, 'helsinki'));

// function fruitJuice(apple, orange){
//     // console.log(apple, orange);
//     let juice = `${apple} apples and ${orange} oranges`
//     return juice;
// }

// fruitJuice(10,5);
// console.log(fruitJuice(10,5));

//dünyanınYüzdesi adında bir fonksiyon oluşturulacak.
//parametre olarak popülasyon değeri verilecek ve girilen popülasyon değerinin dünyaya yüzdesi döndürülecek
//yüzde hesabı için popülasyon değerini dünya nüfusuna bölüp 100 ile çarp
//3 ülke seç ve bu fonksiyonu çalıştır - konsolda yazdır.
//tam olarak aynı şeyi yapan ikinci bir dünyanınYüzdesi2 fonksiyonu yapıp 3 ülkede çağır

// function dünyanınYüzdesi(popülasyon) {
//     const yüzde = (popülasyon / 7900) * 100;
//     return yüzde;
// }

// const ülke1 = 60
// const ülke2 = 80
// const ülke3 = 150

// console.log(ülke1, ülke2, ülke3);

// const dünyanınYüzdesi2 = function (popülasyon){
//     return (popülasyon / 7900) * 100;
// }

// console.log(dünyanınYüzdesi2(60), dünyanınYüzdesi2(80), dünyanınYüzdesi2(250))

// const dünyanınYüzdesi3 = (popülasyon) => {
//     return (popülasyon / 7900) * 100
// }

// console.log(dünyanınYüzdesi3(7900));

//iç içe fonksiyonlar

//nüfusuTanımla adında bir fonksiyon oluşturun
//Bu fonksiyonun iki parametresi olsun (ülke ve nüfus)
//Şu dizeyi döndürsün: çin'de 1441 milyon insan var ve dünyanın yaklaşı %...'dır.
//Bu fonksiyon içinde önceden oluşturduğumuz dünyanınYüzdesi1'i çağır

// function dünyanınYüzdesi(popülasyon) {
//     const yüzde = (popülasyon / 7900) * 100;
//     return yüzde;
// }

// function nüfusuTanımla (ülke, nüfus) {
//     return `${ülke}'de ${nüfus} insan var.... ${dünyanınYüzdesi(nüfus)}'dir`
// }

// console.log(nüfusuTanımla('çin', 1441));
// console.log(nüfusuTanımla('ülke2', 5000));
// console.log(nüfusuTanımla('ülke3', 325));

//kodlama #29 =====================================

//kazanma koşulu bir takımın diğer takımın puanını ikiye katlamasıdır
//ortalamaHesabı adında 3 puan ortalaması alacak fonksiyon oluştur
//her iki takımın ortalaması için bu fonksiyonu kullan
//iki takımın ortalama puanlarını parametre olarak alan kazananKim fonksiyonu oluştur

// function ortalamaHesabı(skor1, skor2, skor3){
//     return (skor1 + skor2 + skor3) / 3
// }

// const kaplanOrt = ortalamaHesabı(85, 54, 41);
// console.log(kaplanOrt);

// const kobraOrt = ortalamaHesabı(23, 34, 27);
// console.log(kobraOrt);

// function kazananKim(ort1, ort2) {
//     if(ort1 >= 2 * ort2){
//         return `kaplanlar (${ort1}) kazandı`;
//     }else if(ort2 >= 2* ort1){
//         return `kobralar (${ort2}) kazandı`;
//     }else if (ort1 > ort2){
//         return `kaplanlar kazandı ama iki kat üstünlük sağlayamadı`;
//     }else if(ort2 > ort1){
//         return `kobralar kazandı ama iki kat üstünlük sağlayamadı`;
//     }else{
//         return `kazanan yok / berabere`;
//     }

// }
// console.log(kazananKim(kaplanOrt, kobraOrt));

//fonksiyonlardaki koşullarda console.log yerine return yazılması yapısal olarak daha doğru

//dizilere giriş (ARRAYS)===========================

// const popülasyonlar = [50, 60, 70, 80];
// console.log(popülasyonlar);

// console.log(popülasyonlar.length === 4);

// function dünyanınYüzdesi(popülasyon) {
//     return (popülasyon / 7900) * 100;
// }

// const yüzdeler = [
//     dünyanınYüzdesi(50),
//     dünyanınYüzdesi(60),
//     dünyanınYüzdesi(70),
//     dünyanınYüzdesi(80)
// ];

// console.log(yüzdeler);

//seçilen ülke için komşu dizisi oluştur
//seçtiğiniz ülkenin yanına ütopya komşusu ekle
//eklenen komşuyu sonra sil
//komşular dizisi almanya ülkesini içermiyorsa şunu yaz: muhtemelen orta avrupa ülkesi değil
//komşulardan birinin adını değiştir (indeksi bularak yap)

// const komşular = ['bir', 'iki', 'almanya'];

// komşular.push('ütopya'); //dizinin sonuna eleman ekleme
// console.log(komşular);

// komşular.unshift('ütopya') //dizinin başına eleman ekleme
// console.log(komşular);

// komşular.pop(); // dizinin son elemanını çıkartma
// console.log(komşular);

// komşular.shift(); //dizinin ilk elemanını çıkartma
// console.log(komşular);

// if(komşular.includes('almanya')){
//     //.includes içeriyor mu sorgusunu yapar (true / false şeklinde)
//     console.log('orta avrupa ülkesidir');
// }else{
//     console.log('orta avrupa ülkesi değildir');
// }

// console.log(komşular.indexOf('almanya')); // değer.indexOf(istenilen isim) istediğimiz değerin indeksini verir.

// komşular[2] = 'isveç'

// console.log(komşular[2]);

// kodlama #30 =====================================

//Engin'in bahşiş hesaplayıcısını oluştur. fatura 50 ile 300 arasında ise bahşiş faturanın %15'i kadar, değilse faturanın %20'si kadar olsun.
//Bu kurala göre hesap yapan bahşişHesap adında fonksiyon oluştur.
//fatura dizisi oluştur.
//her fatura için oluşturduğumuz fonksiyon ile bulunmuş bahşiş hesaplarını içeren dizi oluştur ( bahşişler adında )
//toplam ödenecek tutarı içeren toplam dizisi oluştur.

// function bahşişHesap(fatura){
//     if(fatura > 50 && fatura < 300){
//         return fatura * 0.15;
//     }else{
//         return fatura * 0.2;
//     }
// }

// console.log(bahşişHesap(100));

// const faturalar = [
//     125,
//     555,
//     44
// ]

// const bahşişler = [
//     bahşişHesap(125),
//     bahşişHesap(555),
//     bahşişHesap(44)
// ]

// console.log(bahşişler);

// const toplamFatura = [
//     faturalar[0]+bahşişler[0],
//     faturalar[1]+bahşişler[1],
//     faturalar[2]+bahşişler[2],
// ]

// console.log(toplamFatura);

//Nesnelere giriş / introduction to objects=========

//ülke seç
//ülkem adında ülke, başkent, dil, nüfus ve komşu anahtarlarını içeren bir obje oluştur

// const ülkem = {
//     ülke: 'Türkiye',
//     başkent: 'Ankara',
//     dil: 'Türkçe',
//     nüfus: 85,
//     komşular: ['Azerbaycan', 'Gürcistan'],
//     // adaMı: false,
//     ekleme: function(){
//         console.log(this);
//         return `Türkiye'nin resmi dili ${this.dil}'dir`
//     }
// }

// const adaMı = {`${ülkem.komşular.length > 0}`}

// console.log(ülkem.ekleme());

// const sorgu = ülkem.adaMı === true ? 'komşu yok' : 'komşu var';;

// const sorgu2 = ülkem.komşular.length > 0 ? 'komşu yok' : 'komşu var';;

// console.log(sorgu2);

// console.log(`${ülkem.ülke}'de ${ülkem.nüfus} milyon kadar ${ülkem.dil} konuşan insan var. Başkenti ${ülkem.başkent}'dır. ${ülkem.komşular.length} kadar komşusu var ve bunlar ${ülkem.komşular}'dır`);

//kodlama #31 ==================================

// BMI'ları nesneleri kullanarak karşılaştıracağız.
//BMI = kilo / boy **2 (kg / metre cinsinden)
// iki kişi için nesne oluşturup  içerisine ad, soyad, kilo ve boy değerlerini yaz
//BMIHesap fonksiyonu oluştur
//BMI'sı yüksek olan konsolda ad, soyad ve ilgili BMI ile birlikte yazılsın.

// function BMIHesap (kilo, boy){
//     return kilo / (boy **2)
// }

// const engin = {
//     ad: 'Engin',
//     soyad: 'Derin',
//     kilo: 92,
//     boy: 1.95,
// }

// const murat = {
//     ad: 'Murat',
//     soyad: 'Akdağ',
//     kilo: 78,
//     boy: 1.69,
// }

// const enginBMI = BMIHesap(engin.kilo, engin.boy);
// console.log(enginBMI);

// const muratBMI = BMIHesap(murat.kilo, murat.boy);
// console.log(muratBMI);

// if(muratBMI > enginBMI){
//     console.log(`${murat.ad}'ın BMI'sı (${muratBMI}) ${engin.ad}'inkinden (${enginBMI}) büyük`);
// }else{
//     console.log(`${engin.ad}'ın BMI'sı (${enginBMI}) ${murat.ad}'inkinden (${muratBMI}) büyük`);
// }

//===== Döngüler / Loops ========

//50 seçmen var, 50 kişi oy verecek.
//oy kullananları konsolda göster.

// for(let i = 0; i <= 50 ; i++){
//     console.log(`${i}'inci seçmen oy kullandı`);
// }

//---------------
//popülasyon adında bir dizi oluştur ve bu dizi içerisinde 3 farklı tipte veri olsun
//veri tipleri içerisinden number olan ile önceden yaptığımız dünyanınYüzdesi fonksiyonu ile döngü içerisinde etkileşime geçir.

// const dünyanınYüzdesi = function (popülasyon){
//     return (popülasyon / 7900) * 100;
// }

// const pop = [
//     60,
//     70,
//     80,
//     'selam',
//     true,
//     100,
// ];

// console.log(dünyanınYüzdesi(60), dünyanınYüzdesi(70), dünyanınYüzdesi(80), dünyanınYüzdesi(100));

// continue örnek

// for(let i = 0; i < pop.length ; i++){
//     if(typeof pop[i] !== 'number'){
//         continue
//     }
//     console.log(`Popülasyon dünyanın ${dünyanınYüzdesi(pop[i])} yüzdesi`);
// }

//break örnek

// for(let i = 0; pop.length ; i++){
//     if(typeof pop[i] !== 'number'){
//         break
//     }
//     console.log(`Popülasyon dünyanın ${dünyanınYüzdesi(pop[i])} yüzdesi`);
// }

//--- loop in loop

//bir dizi oluştur. Bu dizinin içerisindeki elemanları da birer dizi olsun
//Her bir arrayi veya içerisindeki arrayin elemanını tek tek ykonsola yazdır
//ör: her ülke için 'komşu: ülke ismi'

// const komşularListesi = [
//     ['Kanada', 'Meksika'],
//     ['İspanya'],
//     ['Norveç', 'İsveç', 'Rusya'],
// ];

// for(let i = 0; i < komşularListesi.length ; i++){
//     for(let y = 0; y < komşularListesi[i].length ; y++){
//         console.log(`Komşu: ${komşularListesi[i][y]}`); //[][] array içerisinde array gösterimi
//     }
// }

//------- while döngüsü

//önceden oluşturduğumuz pop dizisini while döngüsü ile yeni bir diziye yazdır
//bu görev için for mu yoksa while mı daha kullanışlı olur?

// const dünyanınYüzdesi = function (popülasyon){
//     return (popülasyon / 7900) * 100;
// }

// const pop = [
//     60,
//     70,
//     80,
//     'selam',
//     true,
//     100,
// ];

// const yüzdeler3 = [];

// let i = -1;
// while(i < pop.length){
//     i++;
//     if(typeof pop[i] !== 'number') {
//         continue
//     };
//     yüzdeler3.push(dünyanınYüzdesi(pop[i]));
// };

// for(let i = 0; i < pop.length ; i++){
//     if(typeof pop[i] !== 'number'){
//         continue
//     }
//     yüzdeler3.push(dünyanınYüzdesi(pop[i]));
// }

// console.log(yüzdeler3);

//----- Boss fight ----

//Engin'in bahşiş hesaplayıcısı

//fatura adında 10 adet number iceren bir dizi oluştur
//bahşişler ve toplamlar için boş dizi oluştur
//fatura + bahşiş hesabını yapmak için önceden oluşturduğumuz bahşişHesap fonksiyonunu kullan
//dizi içerisindeki faturalara göre bahşişleri hesaplamak için döngü kullan
//arr dizisini argüman alacak bir ortHesap fonksiyonu oluştur.Bu fonksiyon, dizide verilen tüm sayıların ortalamasını hesaplasın.
//ort hesaplamak için 0'dan başlayan bir toplam değişkeni oluşturarak başla. Sonra for döngüsü kullan. her döngüde geçerli değeri toplam değişkenine eklesin.
//ort hesabı için önce hesaplanan toplam dizisinin uzunluğuna (elam sayısı) bölün
//toplamlar diziyle oluşturduğunuz yeni işlevi çağırın.

// function bahşişHesap(hesap) {
//   if (hesap > 50 && hesap < 300) {
//     return hesap * 0.15;
//   } else {
//     return hesap * 0.2;
//   }
// }

// const fatura = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// console.log(fatura);

// const bahşişler = [];
// const toplamlar = [];

// for (let i = 0; i < fatura.length; i++) {
//   bahşişler.push(bahşişHesap(fatura[i]));
//   toplamlar.push(fatura[i] + bahşişler[i]);
// }

// console.log(bahşişler);
// console.log(toplamlar);

// const ortHesap = function (arr) {
//   let toplam = 0;
//   for (let i = 0; i < arr.length; i++) {
//     toplam += arr[i];
//   }
//   return toplam / arr.length;
// };

// console.log(ortHesap(fatura));
// console.log(ortHesap(toplamlar));

// const fatura2 = [
//   22,
//   295,
//   176,
//   440,
//   "selam",
//   true,
//   37,
//   105,
//   false,
//   10,
//   1100,
//   86,
//   52,
// ];

// const ortHesap2 = function (arr) {
//   let toplam = 0;
//   let çıkartma = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") 
//       continue;
//       toplam += arr[i];
//       çıkartma++;
//   }

//   toplam === 0
//     ? console.log(`diziye bir değer gir`)
//     : console.log(`ortalaması ${toplam / çıkartma}`);
// };

// console.log(ortHesap2(fatura2));

// const ortHesap3 = function (arr) {
//   let toplam = 0;
//   let sayaç = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") continue;
//     toplam += arr[i];
//     sayaç++;
//   }

//   toplam === 0
//     ? console.log(`Dizide sayı yoktur.`)
//     : console.log(`Ortalama sayı ${toplam / sayaç}`);
// };

// console.log(ortHesap3([40, 30, "hello", true, 50]));



//===== Döngüler / Loops End=====
