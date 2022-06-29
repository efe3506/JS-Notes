'use strict'

//*Değişkenlerimiz
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

//*Buttona tıklanınca gerçekleşecek olay
btn.addEventListener("click", palindrome);


function palindrome() {
    //*fonksiyonun alacağı objeyi fonksiyon içerisinde bir değişkene atadık(değerini)
    const word = document.querySelector(".input-text").value;

    //*girilen her kelimenin uzunluğu değişeceği için let ile değişebilir bir değişken oluşturduk
    let len = word.length;

    //* substring(x,y) metodu indexStart'tan (x'ten başlayarak) indexEnd'e(y'ye kadar fakat y dahil değil)kadar dizedeki karakterleri seçer. Buradaki koşulda Math.random() ile 0-1 arasında ondalıklı bir sayı ürettiğimiz için indexStart'ı (x'i) 0.'dan sonra gelen index olarak belirtmemiz gerekli. Ardından indexEnd'i de +1 belirtmeliyiz ki istediğimiz sonuncu indexi de alabilelim. floor() özelliğini kullandık çünkü kelime uzunluğunun tam sayı haline ihtiyacımız var. Özellikle floor() kullanmamızın nedeni de substring()'in girilen son indeksten önceki indeksi almasını kesirli sayıyı yuvarlayarak engellemek istememiz.
    let start = word.substring(0, Math.floor(len/2)).toLowerCase();

    let end = word.substring(len - Math.floor(len/2)).toLowerCase();

    //* kelimenin son harflerini tersine çevirmeliyiz ki sorguda kelimenin başlangıcı ile aynı olduğunda yani palindrom olduğunda koşul true dönsün.
    //*string değeri tersine çeviremeyeceğimiz için stringi split metoduyla bir array'e çevirip reverse() metoduyla harflerini ters çevirdik ardından join() metoduyla oluşturduğumuz array'i tekrar string'e çevirdik.
    let flip = end.split("").reverse().join("");

    if(start === flip){
        result.innerHTML = `✅ ${word.toUpperCase()} bir palindrom ✅`;
    } else{
        result.innerHTML = `❎ ${word.toUpperCase()} bir palindrom değil ❎`;
    }
}