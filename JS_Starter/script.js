// let js = "harika";

// if(js === "harika") alert("JavaScript is Super !")

// 40+23+56-29;
// console.log(40+23+56-29);

// VALUES AND VARİABLES--------------------------------

// variable ==> bir value'yu barindirabilecek bir kutu gibi hayal edilebilir

// console.log('Efe')
// console.log(26)

// let firstName = 'Ece'
// console.log(firstName)
// console.log(firstName)
// console.log(firstName)
// first_name

// Degisken Adlandirma ----------------

// let 3yıl = hatali kullanim

// let efe&ece = "selam"
// let new = 27
// let $function =27

// let Person = 'efe' büyük harfla degisken ismi verilmemeli

// let PI = 3.141519 tamami buyuk harf olan degisken isimleri degismeyecegini bildigin sabit degerler icin yazilabilir( yazili olmayan kural)

// let ilkİsim = 'biyolog'
// let mevcutİsim = 'developer'

// let is1 = 'biyolog'
// let is2 = 'developer'

// clean code yazmak adina degisken (variable) isimlerini deklare edilecek deger ile anlamli bir iliski kurulacak sekilde verilmeli

// console.log(ilkİsim)

// Data types ---- --------------

// let ben = {
//     name: 'Efe'
// } bu bir nesne ve gelismis data

// let firstName = 'Efe'primitiv data

// let age = 36.0 //number data tipi (JS'te tüm sayilar numberdir)

// let firstName = 'Efe' //string data tipi
// let age = 26

// let ready = false //boolean data tipi / mantıksal

// let country ; // Undefined deger = bos deger

// degiskenler sadece turu olan degerleri barindirir

// let country

// console.log(true)

// console.log(typeof true)
// console.log(age, (typeof age))

// let year

// console.log(year)
// console.log(typeof year)

// year = 1996

// console.log(year, typeof year)

// console.log(typeof null)

// let, const, var -----------------------------

// let age = 26
// age = 27 // let ile atanan deger ardindan degistirilebilir.

// const dogumYili = 1996

// dogumYili = 1997 //const deger tanimlandiktan sonra degistirilemez

// const job; //const deger atanirken bos deger verilemez

// var job = 'developer'
// job = 'frontend developer'

//OPERATORS------------------------------------------
// const simdi = 2040

// let yasEfe = simdi - 1996
// console.log(yasEfe)

// const yasNamik = simdi - 2000
// console.log(yasEfe, yasNamik)
// console.log(yasEfe * 2, yasEfe / 10, 2 ** 3)

// const ad = 'Efe'
// const soyad = 'Dallı'

// console.log(ad + ' ' + soyad)

// let x = 10 + 5 // 15
// console.log(x)

// x += 10 // x = x + 10

// x *= 4

// console.log(x)

// Karsilastirma operatorleri--------

// const simdi = 2040

// let yasEfe = simdi - 1996
// const yasNamik = simdi - 2000

// console.log(yasNamik > yasEfe) // >, <, >=, <=
// console.log(yasNamik >= 18)

// const resitMi = yasNamik >= 18

// console.log(simdi - 1986 > simdi - 2000)

//operatör önceligi -----------------------

// const simdi = 2040

// const yasEfe = simdi - 1996
// const yasNamik = simdi - 2023

// console.log( simdi - 1986 > simdi - 2023)
// console.log(35- 10 - 5)

// let x,y ;

// x = y = 35 - 10 -5 // x = y = 20

// console.log(x, y)

// console.log(yasEfe, yasNamik)

// const ortalamaYas = (yasEfe + yasNamik) / 2

// console.log(yasEfe, yasNamik, ortalamaYas)

// Strings & Template Literals -------------------------------

// const ad = 'Efe'
// const is = 'developer'
// const dogumYili = 1996
// const yil = 2040

// console.log('I\'m')

// const efe = "I'm " + ad + ', a ' + is + ' and ' + (yil - dogumYili) + 'years old'
// console.log(efe)

// let dize = 'hello'
// dize +=
// dize += 'world'

// console.log(dize)

// const yeniEfe = `I'm ${ad}, ${yil - dogumYili} years old and I'm a ${is}`

// console.log(yeniEfe)
// console.log(` bu sade bir dize`)

// console.log("bu bir çok satırlı \n\ bir dizedir. Bu da ikinci satir")

// console.log(`Bu bir çok satırlı
// dizedir. ikinci satir`)

// IF ELSE STATEMENT========================

// const yas = 15

// const yasUygunMu = yas >= 18

// if(yasUygunMu){
//     console.log('Uygun, ehliyet alabilir')
// }else{
//     const kacYilKaldi = 18 - yas
//     console.log(`Yasin henüz uygun degil. ${kacYilKaldi} yil beklemen gerekli`)
// }

// const dogumYili = 1996
// let yuzyil

// if(dogumYili <= 2000){
//      yuzyil = 20
// }else{
//      yuzyil = 21
// }

// console.log(yuzyil)

// TYPE CONVERTION ------------

// const girisYili = '2020'

// console.log(Number(girisYili), girisYili)
// console.log(Number(girisYili) + 18)
// console.log(Number('efe'))
// console.log(typeof NaN)
// console.log(String(23), 23)

// TYPE COERCION ----------------

// console.log("ben " + 26 + " yasindayim")
// console.log("ben " + "26" + " yasindayim")

// console.log("ben " + String(26) + " yasindayim")

// console.log("36" - "10" - 3)
// console.log("36" + "10" + 3)
// console.log("36" * "10" )
// console.log("36" / "10" )

// let n = "1" + 1 // 11
// console.log(n)

// n = n + 1

// console.log(n)

//Truthy & Falsy Values------------------

//5 falsy (sozde yanlis deger) deger: 0, "", undefined, null, NaN

// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))

// const money = 0;

// if(money){
//     console.log("sakin harcama")
// }else{
//     console.log("calis kopke")
// }

// let yukseklik

// if(yukseklik){
//     console.log("yukseklik tanimlanmis")
// }else{
//     console.log("yükseklik yok")
// }

//Eşitlik operatörleri ------------------------------------------

// const yas = 18;

// if(yas === 18) console.log('yeni yetiskin oldum');
// if(yas == 18) console.log('yeni yetiskin oldum (gevsek)');

// const favori = Number(prompt('En sevdiğim numara'))

// console.log(typeof favori);

// if(favori == 23){ // "23" == 23 yazdik JS bunu donusturerek 23'e esitledi
//     console.log('23 bir sayıdır');
// }else if(favori === 7){
//     console.log('7 şanslı numaram');
// }else if(favori === 9){
//     console.log('9 fena degil');
// }
// else{
//     console.log('sayı 23 ve 7 degil');
// }

// if(favori !== 23){
//     console.log('neden 23 degil');
// }else if(favori ===9){
//     console.log('9 da fena degil');
// }

//Boolean Logic ----------------------

// A.Murat'ın ehliyeti var
// B.Murat gözlük kullanıyor

// const ehliyetiVarMı = true // A degiskeni

// const gözlükVarMı = false //B degiskeni

// console.log(ehliyetiVarMı && gözlükVarMı);
// console.log(ehliyetiVarMı || gözlükVarMı);

// console.log(!ehliyetiVarMı);

// const kullanabilirMi = ehliyetiVarMı && gözlükVarMı

// if(ehliyetiVarMı && gözlükVarMı) {
//     console.log('murat arac kullanabilir');
// }else{
//     console.log('Murat arac kullanamaz');
// }

// const yorgunMu = true // C degiskeni

// console.log(ehliyetiVarMı || gözlükVarMı || yorgunMu);
// console.log(ehliyetiVarMı && gözlükVarMı && yorgunMu);

// if(ehliyetiVarMı && gözlükVarMı && !yorgunMu){
//     console.log('murat arac kullanabilir');
// }else{
//     console.log('murat arac kullanamaz');
// }

//Switch case##################################

// const gün ='persembe'

// switch(gün){
//     case 'pazartesi': // gün === 'pazartesi
//     console.log("kurs planlaması");
//     console.log("sabah toplantısı");
//     break
//     case "salı":
//         console.log('spora git');
//         break
//     case 'carsamba':
//     case 'persembe':
//         console.log('yemek yap')
//         break
//     case 'cuma':
//         console.log('dinlen');
//         break
//     case 'cumartesi':
//     case 'pazar':
//         console.log('haftasonunun tadını cıkar');
//         break
//     default:
//         console.log('geçerli bir gün değil');
// }

// if(gün === 'pazartesi'){
//     console.log('kurs planlaması', 'sabah toplantısı');
// }else if( gün === 'salı'){
//     console.log('spora git');
// }else if(gün === 'çarşamba' || gün === 'persembe'){
//     console.log('yemek yap');
// }else if(gün === 'cuma'){
//     console.log('dinlen');
// }else if(gün === 'cumartesi' || gün === 'pazar'){
//     console.log('haftasonunun tadını cıkar');
// }else{
//     console.log('geçerli bir gün değil');
// }

//Statement & Expressions ##########################

// if (23 > 10) {
//     const büyükSayı = '23 büyük'
// }//statement

// console.log(büyükSayı);

// const isim = "Efe"

// console.log(`ben (${isim}) ${2040 - 1996} yaşımdayım`);//expression

//Ternary Operator ##################################
// expression ifadedir `` kullanılabilir

// const yas = 26;

// yas >= 18 
//   ? console.log("araba sürebilir") 
//   : console.log("yan koltuk benim");


// const araba = yas >= 18 
//   ? "araba sürebilir"
//   : "yan koltuk benim";

// console.log(araba);

// let araba2;
// if(yas >= 18){
//     araba2 = 'bmw'
// }else{
//     araba2 = 'oyuncak'
// }

// console.log(araba2);

// console.log(`Bu yaşta ${yas >= 18 
//     ? "araba sürebilir"
//     : "yan koltuk benim"}`);