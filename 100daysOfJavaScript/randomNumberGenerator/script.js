'use strict'

//*Erişilecek elemanları değişkenlere atıyoruz
const number = document.querySelector('.number');
const btnGenerate = document.querySelector('.generate');
const choose = document.querySelector('.choose');
const btn10 = document.querySelector('.ten');
const btn100 = document.querySelector('.oneh');


//*rastgele 1-10 ve 10-100 arası sayı oluşturacak fonksiyonları tanımlıyoruz
const generateNumber10 = function(){
    //Math.random() 0 ile 1 arasında kesirli sayı üretir ancak asla 1 üretmez. Bu nedenle 1-10 arası olması için 10 ile çarptım. Ayrıca 10 değerini de alabilmesi için 1 ekledim. Ondalık sayılardan kurtulmak içinde sadece tam sayıyı almaya yarayan trunc() özelliğini kullandım. Buna alternatif olarak floor() da kullanılabilir. Bu fonksiyon çıkan ondalık sayıyı en yakın integer sayıya yuvarlar.
    const randomNumber = Math.trunc(Math.random() * 10) +1 ;
    number.textContent = randomNumber;
}

const generateNumber100 = function(){
    //farklı lokal scope'larda oldukları için fonksiyon içerisinde 2 aynı const değişkeni oluşturabiliriz
    const randomNumber = Math.trunc(Math.random() * 100) +1 ;
    number.textContent = randomNumber;
}

//*Tıklamayla gerçekleşecek olan eventleri yazıyoruz.
btnGenerate.addEventListener("click", () =>{
    //generate'e tıklandığında display'yi none olan sınıfların gözükmesi ve seçeneklerin kullanıcıya sunulması için ve tekrar gizlenebilmesi için:
    choose.classList.toggle('hidden');

    //Seçenekler açıkken generate buttonunun kapatma buttonuna dönüşmesi ve kapatıldığında rastgele oluşturulan sayının sıfırlanması için gereken koşul:
    if(choose.classList.contains('hidden')){
        btnGenerate.textContent = 'Generate...';
        number.textContent = 0;
    }else{
        btnGenerate.textContent = 'Close...';
    }
})

btn10.addEventListener("click", generateNumber10);

btn100.addEventListener("click", generateNumber100);