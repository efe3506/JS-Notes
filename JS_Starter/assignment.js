// little practise -1/2/3 (data types / let-var-const) ------

// let ulke = 'Ireland'
// const kita = 'Europe' //cografi konum sabit/degismez
// let nufus = 4995000 //let daha mantikli => artabilir / azalabilir
// let dil = 'English'
// const adaMi = true
// dil = 'ingilizce'
// nufus = 4995001
// let adaMı = true

// if(dil === 'ingilizce' && nufus < 50000000 && !adaMı){
//     console.log(`${ulke}'da yaşamalısın`);
// }else{
//     console.log(`${ulke} kriterlerinizi karşılamıyor (bak sen :))`);
// }
// nufus++
// console.log(nufus / 2)
// console.log(nufus >= 6000000)

// const aCountry = 33000000
// console.log(nufus >= aCountry)

// console.log(ulke, kita, nufus, dil, adaMi)
// console.log(typeof ulke, typeof kita, typeof nufus, typeof dil, typeof adaMi)

// const aciklama = ulke + ' is in '+ kita + ' and ' + nufus + ' people speaks ' + dil + ' in it.'
// console.log(aciklama)

// const aciklama = `${ulke} is a country located in ${kita} and
//  ${nufus} people speak ${dil} in it`
// console.log(aciklama)

//Ternary Operator pratik ----------

// console.log(`${ulke}'nin ${nufus >= 33000000 ? "nufusu ortalamanın üstünde" : "nufusu ortalamanın altında"}`);

// console.log(`${ulke}'nin ${nufus <= 33000000 ? "nufusu ortalamanın üstünde" : "nufusu ortalamanın altında"}`);

//ya da

// nufus >= 33000000
// ? console.log(`${ulke}'nin nufusu ortalamanın ustunde`)
// :console.log(`${ulke}'nin nufusu ortalamanın altında`);;

//switch case pratik ---------

// switch(dil){
//     case 'çince':
//     case 'mandarin':
//         console.log('çok fazla konuşuluyor!');
//         break
//     case 'ispanyolca':
//         console.log('anadili olarak dünyada 2. sırada');
//         break
//     case 'ingilizce':
//         console.log('3. sırada');
//         break
//     case 'hintçe':
//         console.log('4. sırada');
//         break
//     case 'arapça':
//         console.log('5. sırada');
//         break
//     default:
//         console.log('harika dil');
// }

// little practise (challange 25) (operators)

// let muratKilo = 71
// let muratBoy = 1.87

// let enginKilo = 92
// let enginBoy = 1.95

// const bmiMurat = (muratKilo / muratBoy**2)
// console.log(bmiMurat)

// const bmiEngin = (enginKilo / enginBoy **2)
// console.log(bmiEngin)

// console.log(bmiMurat >= bmiEngin)

// muratKilo = 95
// muratBoy = 1.88

// enginKilo = 85
// enginBoy = 1.76

// const bmiMurat2 = (muratKilo / muratBoy**2)
// console.log(bmiMurat2)

// const bmiEngin2 = (enginKilo / enginBoy **2)
// console.log(bmiEngin2)

// console.log(bmiMurat2 < bmiEngin2)

// ----- murat hoca -----

// const agirkilMurat = 71
// const boyMurat = 1.87

// const agirlikEngin = 92
// const boyEngin = 1.95

// const agirkilMurat = 95
// const boyMurat = 1.88

// const agirlikEngin = 85
// const boyEngin = 1.76

// const BMImurat = agirkilMurat / (boyMurat * boyMurat)
// const BMIengin = agirlikEngin / (boyEngin**2)

// console.log(BMImurat, BMIengin)

// const buyukBMI = BMImurat < BMIengin

// console.log(BMImurat, BMIengin, buyukBMI)

// IF ELSE practise

// let ulke = 'Ireland'
// const kita = 'Europe' //cografi konum sabit/degismez
// let nufus = 4995000 //let daha mantikli => artabilir / azalabilir
// let dil = 'English'
// const adaMi = true
// dil = 'Irish / Gaelic'
// nufus = 130000000
// let ortalamaNufus = 33000000

// if(nufus > 33000000){
//     console.log(`${ulke}'s population is above the average. it's about ${ortalamaNufus + nufus} million above`)
// }else{
//     console.log(`${ulke}'s population is below the average. it's about ${ortalamaNufus - nufus} million below`)
// }

// const agirkilMurat = 71
// const boyMurat = 1.87

// const agirlikEngin = 92
// const boyEngin = 1.95

// const agirkilMurat = 95
// const boyMurat = 1.88

// const agirlikEngin = 85
// const boyEngin = 1.76

// const BMImurat = agirkilMurat / (boyMurat * boyMurat)
// const BMIengin = agirlikEngin / (boyEngin**2)

// console.log(BMImurat, BMIengin)

// const buyukBMI = BMImurat < BMIengin

// console.log(BMImurat, BMIengin, buyukBMI)

// if(BMImurat < BMIengin){
//     console.log(`Murat'ın BMI'sı (${BMImurat}) Engin'inkinden daha küçük (${BMIengin})`)
// }else{
//     console.log(`Engin'in BMI'sı (${BMIengin}) Murat'ınkinden daha yüksek (${BMImurat})`)
// }

// TYPE CONVERTION ------------TYPE COERCION ----------------

// console.log('9'-'5')
// console.log('19'-'13'+'17')
// console.log('19'-'13'+17)
// console.log('123'<57)
// console.log(5+6+'4'+9-4-2)

// Eşitlik operatörleri-----------------------------------------

// const komsuSayi = Number(prompt('Ülkenizin kaç komşusu var?'));

// if(komsuSayi == 1){
//     console.log('Sadece 1 komşu!');
// }else if(komsuSayi > 1){
//     console.log("1'den fazla komşu!");
// }else if(komsuSayi === '1'){
//     console.log('sadece 1 (string) komsu !');
// }else{
//     console.log("Komşu yok mu yani?");
// }

// == / === farki uclude else calistiriyor cunku girilmesi istenen deger string yapida. Number ile cevirim yapilirsa normal bir kosulu doner

//if(typeof komsuSayi === "number"){ bir seyler}

// if(Number.isNaN(komsuSayi)){
//NaN degerini kontrol et
//     console.log('lutfen sayi giriniz');
// }else if{

// }

//Boolean practise----------------------------------

// const kaplanSkor = (96 + 108 + 89) / 3
// console.log(kaplanSkor);

// const kobraSkor = (88 + 91 + 110) / 3
// console.log(kobraSkor);

// if(kaplanSkor === kobraSkor){
//     console.log('Berabere');
// }else if(kaplanSkor > kobraSkor){
//     console.log('Kaplanlar Kazandı');
// }else{
//     console.log('Kobralar Kazandı');
// }

//Bonus1 boolean practise

// const kaplanSkor2 = (97 + 112 + 101) / 3
// const kobraSkor2 = (109 + 95 + 123) / 3

// console.log(kaplanSkor2, kobraSkor2);

// if(kaplanSkor2 >= 100 && kobraSkor2 >= 100 && kaplanSkor2 === kobraSkor2){
//     console.log('Berabere, sonraki yarışmaya geç');
// }else if(kaplanSkor2 < 100 && kobraSkor2 < 100 && kaplanSkor2 === kobraSkor2){
//     console.log('iki takım da elendi');
// }else if(kaplanSkor2 >=100 && kobraSkor2 >= 100 && kaplanSkor2 > kobraSkor2){
//     console.log('Kaplanlar Kazandı !!');
// }else{
//     console.log('Kobralar Kazandı !!');
// }

//Bonus2 boolean practise

// const kobraSkor3 = (109 + 95 + 106) / 3
// console.log(kobraSkor3);

// if(kaplanSkor2 >=100 && kobraSkor3 >= 100 && kaplanSkor2 === kobraSkor3){
//     console.log('Berabere, sonraki yarışmaya geç');
// }else if(kaplanSkor2 <100 && kobraSkor3 < 100 && kaplanSkor2 === kobraSkor3){
//     console.log('iki takım da elendi');
// }else if(kaplanSkor2 >= 100 && kobraSkor3 >= 100 && kaplanSkor2 > kobraSkor3){
//     console.log('Kaplanlar Kazandı !!');
// }else{
//     console.log('Kobralar Kazandı !!');
// }

//switch case örnek
// let winner

// if(scoreKaplan > scoreKobra && scoreKaplan > 100){
//     winner = "kaplan"
// }else if(scoreKaplan < scoreKobra && scoreKaplan > 100){
//     winner = "Kobra"
// }else if(scoreKaplan === scoreKobra && scoreKaplan > 100){
//     winner = "both"
// }

// switch(winner){
//     case "kaplan":
//         console.log('Kaplanlar Kazandı');
//         break
//     case "kobra":
//         console.log('Kobralar kazandı');
//         break
//     case "both":
//         console.log('her ikisi de kazandi');
//         break
//     case "no one":
//         console.log('her ikisi de kaybetti');
//         default:
//             break
// }

//ternary pratik 2 --------------------

// const fatura1 = 275;
// const fatura2 = 40;
// const fatura3 = 430;

// const bahşiş1 = console.log(
//   `${
//     fatura1 >= 50 && fatura1 <= 300
//       ? fatura1 * 0.15 + " " + "tl kadar bahsis ver"
//       : fatura1 * 0.2 + " " + "tl kadar bahsis ver"
//   }`
// );

// const bahşiş2 = console.log(
//   `${
//     fatura2 >= 50 && fatura2 <= 300
//       ? fatura2 * 0.15 + " " + "tl kadar bahsis ver"
//       : fatura2 * 0.2 + " " + "tl kadar bahsis ver"
//   }`
// );

// const bahşiş3 = console.log(
//   `${
//     fatura3 >= 50 && fatura3 <= 300
//       ? fatura3 * 0.15 + " " + "tl kadar bahsis ver"
//       : fatura3 * 0.2 + " " + "tl kadar bahsis ver"
//   }`
// );

// murat hoca çözüm ------------

// const fatura = 40

// const bahşiş = fatura <= 300 && fatura >= 50 ?
// fatura * 0.15 : fatura * 0.2
// // console.log(bahşiş);

// console.log(`Fatura ${fatura}, bahşiş ${bahşiş} ve toplam değer ${fatura + bahşiş}`);

// hatalı / yanlış örnek

// console.log(`Tip is
// ${50 <= fatura <=300 //ilk kosul false dondugu icin false'ın sayısal degeri 0 olarak görünür ve sürekli ilk koşul gerçekleştirilir. Bu yüzden operatör kullanılmalı (&&)
// ? (fatura * 0.15)
// : (fatura * 0.2)}`);

// başka örnek -----------

// let fatura = Number(prompt("Fatura giriniz"));

// fatura >= 50 && fatura <= 300
//   ? alert(
//       `Fatura ${fatura}, bahşiş ${(bahşiş =
//         fatura * (0.15).toFixed(2))}. Total ${fatura + bahşiş}`
//     )
//   : alert(
//       `Fatura ${fatura}, bahşiş ${(bahşiş =
//         fatura * (0.2).toFixed(2))}. Total ${fatura + bahşiş}`
//     );

// fonksiyon pratik -------------------------------

// ülke, nüfus, başkent şeklinde 3 parametresi olan ülkeniTanımla fonksiyonu / fonksiyon cagirildiğinda donecek yazi / 3 farklı degiskende fonksiyon calıştırma / bu degiskenleri konsolda gösterme

// function ülkeniTanımla(ülke, nüfus, başkent){
//     const ulke = `${ülke}'de/da ${nüfus} milyon kadar insan yaşıyor ve başkenti ${başkent}`
//     return ulke;
// }

// let irlanda = ülkeniTanımla("irlanda",4.9, "dublin")
// let finlandiya = ülkeniTanımla("finlandiya", 6, "helsinki")
// let fransa = ülkeniTanımla("estonya", 1.3, "tallinn")

// console.log(irlanda);
// console.log(finlandiya);
// console.log(fransa);

//hatalı fonksiyon örnaği------

// function fruitJuice(apple, orange){
//     console.log(apple, orange)
//     let juice = `${apple} apples and ${orange} oranges`
//     return juice;
// }

// const juice = fruitJuice(10, 5) //çözüm

// fruitJuice(10, 5);
// console.log(juice);

//function expression & declarations exercise =============================

// const dünyaNüfus = 7900;

// //function declaration
// function dünyanınYüzdesi1(popülasyon){
//     const dünyaYüzdesi = (popülasyon / dünyaNüfus) * 100;
//     console.log(dünyaYüzdesi);
// }

// dünyanınYüzdesi1(4.9) //irlanda
// dünyanınYüzdesi1(5.5) //İskoçya
// dünyanınYüzdesi1(1.3) //Estonya

// function dünyanınYüzdesi2(popülasyon){
//     return ((popülasyon / dünyaNüfus) * 100);
// }

// console.log(dünyanınYüzdesi2(1.3), dünyanınYüzdesi2(5.5), dünyanınYüzdesi2(4.9));

// // function expression
// const dünyaYüzdesi = function dünyaYüzdesi(popülasyon){
//     return((popülasyon / dünyaNüfus) * 100)
// }

// const estonyaYüzdesi = dünyaYüzdesi(1.3);
// console.log(estonyaYüzdesi);

// Arrow function ========================================

// const dünyaYüzdesi2 = popülasyon => (popülasyon / dünyaNüfus) * 100;

// const irlandaYüzdesi = dünyaYüzdesi2(4.9);
// console.log(irlandaYüzdesi);

//Function calling other function practise =======================

// const dünyaNüfus = 7900;

// const dünyaYüzdesi2 = popülasyon => (popülasyon / dünyaNüfus) * 100;

// function nüfusuTanımla(ülke, nüfus){
//     const dünyaYüzdesi2 = popülasyon => (popülasyon / dünyaNüfus) * 100;
//     const yüzde = dünyaYüzdesi2(nüfus);
//     const ÜlkeDünyaYüzdesi = ` ${ülke}'nin nüfusu dünya nüfusunun yüzde ${yüzde}'i kadarıdır`;
//     return ÜlkeDünyaYüzdesi;
// }

// const çinDünyaYüzdesi = nüfusuTanımla('Çin', 1441);

// console.log(çinDünyaYüzdesi);

// console.log(nüfusuTanımla('japonya', 126));

//practise =====================================

// const yaşHesap = function(doğumYılı){
//     return 2022 - doğumYılı;
// }

// const emekliliğeKalanSüre = function(doğumYılı, ad){
//     const yaş = yaşHesap(doğumYılı);
//     const emeklilik = 65 - yaş;
//     if(emeklilik > 0){
//         return `${ad}'ın emekliliğine ${emeklilik} kadar yıl kaldı`
//     }else{
//         // return`${ad} ${(emeklilik) * (-1)} yıl önce emekli oldu`
//         console.log('🎉✨🎊');
//         return -1
//     }
// }

// console.log(emekliliğeKalanSüre(1950, 'kadri'));

//Bölüm sonu canavarı challange 29 ===========================

// const ortHesap = (yarış1, yarış2, yarış3) => (yarış1 + yarış2 + yarış3) / 3;

// const kaplan1 = 44;
// const kaplan1 = 85;

// const kaplan2 = 23;
// const kaplan2 = 54;

// const kaplan3 = 71;
// const kaplan3 = 41;

// const kaplanOrt = ortHesap(kaplan1, kaplan2, kaplan3);
// console.log(kaplanOrt);

// const kobra1 = 65; //
// const kobra1 = 23;

// const kobra2 = 54; //
// const kobra2 = 34;

// const kobra3 = 49; //
// const kobra3 = 27;

// const kobraOrt = ortHesap(kobra1, kobra2, kobra3);
// console.log(kobraOrt);

// const kazanan = function (ort1, ort2) {
//   if (ort1 >= 2 * ort2) {
//     return `Kaplanlar ${ort1 / ort2} farkla kazandı`;
//   } else if (ort2 >= 2 * ort1) {
//     return `Kobralar ${ort2 / ort1} farkla kazandı`;
//   } else {
//     return `Gerekli üstünlük sağlanamadığı için kazanan yok / berabere`;
//   }

// switch(kazanan){
//     case "ort1 >= 2 * ort2":
//         return `Kaplanlar ${ort1 / ort2} farkla kazandı`;
//         break
//     case (ort2 >= 2 * ort1):
//         return `Kobralar ${ort2 / ort1} farkla kazandı`;
//         break
//     default:
//         return `Gerekli üstünlük sağlanamadığı için kazanan yok / berabere`;
// }
// };

// console.log(kazanan(kaplanOrt, kobraOrt));

// function ortHesap(x, y, z) {
//   return (x + y + z) / 3;
// }

// const ortKaplan = ortHesap(44, 23, 71);
// const ortKobra = ortHesap(65, 54, 49);

// function kazananKim(ort_1, ort_2) {
//   return ort_1 >= 2 * ort_2
//     ? console.log(`kaplanlar ${ort_1} puanla kazandı`)
//     : ort_2 >= 2 * ort_1
//     ? console.log(`kobralar ${ort_2} puanla kazandı`)
//     : console.log(`Berabere kalındı`);
// }

// console.log(kazananKim(ortKaplan, ortKobra));

//Bölüm sonu canavarı challange 29 end ===========================

// ARRAYS =======================================
// const dünyaNüfus = 7900;
// const dünyaYüzdesi = popülasyon => (popülasyon / dünyaNüfus) * 100;

// const irlandaNüfus = 4.9;
// const iskoçyaNüfus = 5.5;
// const estonyaNüfus = 1.3;
// const letonyaNüfus = 1.9;

// const ülkeNüfusları = new Array(irlandaNüfus, iskoçyaNüfus, estonyaNüfus, letonyaNüfus);

// console.log(ülkeNüfusları);
// console.log(ülkeNüfusları.length === 4);

// console.log(dünyaYüzdesi(ülkeNüfusları[0]));

// const yüzdeler = [
//   dünyaYüzdesi(ülkeNüfusları[0]),
//   dünyaYüzdesi(ülkeNüfusları[1]),
//   dünyaYüzdesi(ülkeNüfusları[2]),
//   dünyaYüzdesi(ülkeNüfusları[3])
// ]

// console.log(yüzdeler);

//irlanda

// const komşular = ['ingiltere','galler', 'iskoçya'];
// console.log(komşular);

// komşular.push('ütopya');
// console.log(komşular);

// komşular.pop();
// console.log(komşular);

// if(komşular.includes('almanya')){
//   console.log('muhtemelen bir orta avrupa ülkesi ');
// } else{
//   console.log('muhtemelen bir orta avrupa ülkesi değil');
// }

// console.log(komşular.indexOf('galler'));
// // komşular[1] = 'muz cumhuriyeti'
// console.log(komşular);


//challange 30================

// const fatura = [125, 555, 44];

// const bahşişHesap = (fatura) => {
//   const bahşiş =
//     fatura >= 50 && fatura <= 300
//       ? fatura * 0.15 
//       : fatura * 0.2
//   ;
//   return bahşiş;
// };

// const bahşişler = [
//   bahşişHesap(fatura[0]),
//   bahşişHesap(fatura[1]),
//   bahşişHesap(fatura[2]),
// ];

// console.log(bahşişler);

// const toplam = [
//   fatura[0] + bahşişler[0],
//   fatura[1] + bahşişler[1],
//   fatura[2] + bahşişler[2],
// ];

// console.log(toplam);

// murat hoca çözüm---

// const bahşişHesap2 = (fatura) => fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2 // en kısa fonksiyon kurulumu

// const bahşişHesap2 = function(fatura){
//   return fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2
// }

// const fatura = [125, 555, 44];
// const bahşişler = [
//   bahşişHesap2(fatura[0]),
//   bahşişHesap2(fatura[1]),
//   bahşişHesap2(fatura[2])
// ]

// console.log(fatura, bahşişler);





// ARRAYS end =======================================


// OBJECTS intro ====================================

// const ülkem = {
//   ülke : 'İrlanda',
//   başkent : 'Dublin',
//   nüfus : 4.9,
//   dil : 'ingilizce / irlandaca',
//   komşular : ['ingiltere', 'galler', 'iskoçya']
// }

// console.log(ülkem);

// mini challange------------
//"efe'nin üç arkadaşı var ve en iyi arkadaşı seda'dır"

// const efe = {
//   isim : 'Efe',
//   soyisim : 'Dallı',
//   yaş : 2022-1996,
//   meslek : 'biyolog',
//   arkadaşlar : ['seda', 'berkay', 'ömer'],
// };

// console.log(`${efe.isim}'nin ${efe.arkadaşlar.length} arkadaşı var ve en iyi arkadaşı ${efe.arkadaşlar[0]}'dır.`);

// challange - nokta & parantez -----------

// const ülkem = {
//   ülke : 'İrlanda',
//   başkent : 'Dublin',
//   nüfus : 4.9,
//   dil : 'ingilizce / irlandaca',
//   komşular : ['ingiltere', 'galler', 'iskoçya'],
//   adaMı: true,
//   açıklama: function() {
//     return `${this.ülke}'da ${this.nüfus} milyon insan ${this.dil} konuşuyor ve ${this.komşular.length} kadar komşusu, ${this.başkent} adında bir başkenti var. `
//   }, //return yerine console.log(``) şeklinde yazıp dışarıda direkt ülkem.açıklama() ile de yazdırabilirdin.
//   adaKontrol: function() {
//     return `${this.ülke} bir ${this.adaMı ? `ada ülkesidir ve komşuları denizaşırıdır. Bunlar: ${this.komşular}` :  `ada ülkesi değildir ve komşuları sınır komşularıdır. Bunlar: ${this.komşular}`}`
//     //this.adaMı = !Boolean
//   } 

// }


// console.log(`${ülkem.ülke}'da ${ülkem.nüfus} milyon insan ingilizce konuşuyor ve ${ülkem.komşular.length} kadar komşusu, ${ülkem.başkent} adında başkenti var.`);

// console.log(`${ülkem.ülke}'da ${(ülkem.nüfus)+=2} milyon insan ingilizce konuşuyor ve ${ülkem.komşular.length} kadar komşusu, ${ülkem.başkent} adında başkenti var.`);

// console.log(`${ülkem.ülke}'da ${(ülkem.nüfus)-=2} milyon insan ingilizce konuşuyor ve ${ülkem.komşular.length} kadar komşusu, ${ülkem.başkent} adında başkenti var.`);


//-------challange -------
// console.log(ülkem.açıklama());
// console.log(ülkem.adaKontrol());


//--------kodlama #31 ----------

// const muratAkdag = {
//     ad: 'Murat',
//     soyad: 'Akdağ',
//     kilo: 78,
//     boy: 1.69,
//     BMIHesap: function() {
//         return `${this.ad} ${this.soyad}'ın BMI'ı ${(this.kilo)/(this.boy**2)} `
//     },
//     //BMIHesap: function(){
//     //     this.bmi = this.kilo / this.boy **2
//     // }
// }

// const enginDerin = {
//     ad: 'Engin',
//     soyad: 'Derin',
//     kilo: 92,
//     boy: 1.95,
//     BMIHesap: function() {
//         return `${this.ad} ${this.soyad}'ın BMI'ı ${(this.kilo)/(this.boy**2)} `
//     },
//     //BMIHesap: function(){
//     //     this.bmi = this.kilo / this.boy **2
//     // }
// }

// console.log((muratAkdag.BMIHesap()),(enginDerin.BMIHesap()));

// if(muratAkdag.BMIHesap() > enginDerin.BMIHesap()){
//     console.log(`${muratAkdag.ad} ${muratAkdag.soyad}'ın BMI'ı (${muratAkdag.BMIHesap()}) daha büyük!`);
// }else if(enginDerin.BMIHesap() > muratAkdag.BMIHesap()){
//     console.log(`${enginDerin.ad} ${enginDerin.soyad}'ın BMI'ı (${enginDerin.BMIHesap()}) daha büyük!`);
// }else {
//     console.log(`${muratAkdag.ad} ${muratAkdag.soyad} ve ${enginDerin.ad} ${enginDerin.soyad}'ın BMI'ları eşit ((${muratAkdag.kilo / (muratAkdag.boy **2)}) ve (${enginDerin.kilo / (enginDerin.boy **2)})`);
// }


// OBJECTS intro end ================================


//================== Loops / Döngüler ============================

// for(let seçmen = 25; seçmen >=25 && seçmen <=50; seçmen += 1){
//     console.log(`${seçmen} numaralı seçmen su anda oy kullanıyor`);
// }

//çarpım tablosu

// for(let mult = 1; mult <= 100; mult ++){
//     let mult1 = 2; //let mult1 = mult1 *= mult
//     mult1 = 2 * mult;
//     console.log(`2 x ${mult} = ${mult1}`);
// }

// for(let i = 1; i<=5; i = i + 3){
//     console.log(`${i + 1}'i kontrol et`);
// }


// const cl = (txt) => console.log(txt);

// for(let rep = 5; rep <= 10; rep = rep++){
//     console.log(`ağırlık kaldırmak ${rep} tekrar`);
// } sonsuz döngüye girer

// for(let rep = 5; rep <= 10; rep = ++rep){
//     console.log(`ağırlık kaldırmak ${rep} tekrar`);
// } sonsuz döngü yaratmaz pre ++ olduğu için


// for(a = 1; a <= 50; a++){
//     console.log('bişeyler');
// } //değişkenin atanması lazım (for içinde ya da dışında)





//================== Loops / Döngüler End ========================
