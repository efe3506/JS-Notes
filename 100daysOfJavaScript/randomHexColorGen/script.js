'use strict'

// //*Ulaşılacak değişkenler
const hex = document.querySelector('.color');
const btnGenerate = document.querySelector('.generate');

// //*eventListener ile çağırılacak fonksiyonun yazılması:
const generateColor = function(){

    //?toString() yöntemi, bir nesnenin metin olarak görüntülenmesi gerektiğinde (HTML'deki gibi) veya bir nesnenin dize olarak kullanılması gerektiğinde JavaScript tarafından dahili olarak kullanılır. Normalde kendi kodunuzda kullanmazsınız. Ancak, buradaki kullanımımızda Math.random() ile Number oluşturup (0-9 arası) yanına bir de string olarak abcdef eklemeliyiz. JS bunu otomatik yapamayacağı için bizim belirtmemiz gerekiyor.
    //?substring(x,y) metodu indexStart'tan (x'ten başlayarak) indexEnd'e(y'ye kadar fakat y dahil değil)kadar dizedeki karakterleri seçer. Buradaki koşulda Math.random() ile 0-1 arasında ondalıklı bir sayı ürettiğimiz için indexStart'ı (x'i) 0.'dan sonra gelen index olarak belirtmemiz gerekli. Ardından indexEnd'i de +1 belirtmeliyiz ki istediğimiz sonuncu indexi de alabilelim.
    const randomColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.textContent = "#" + randomColor;
}

//*Buttona eklenecek event&fonksiyon
btnGenerate.addEventListener("click", generateColor);



// //! alternatif yöntem():

// function getHex(){
//     //?hex kodu için gereken bütün number(1-9) ve string (a-f) değerleri değiştirilebilecek bir değişkene html'e yazdırabilmek için atıyoruz
//     let letters = "0123456789abcdef";
//     //?html renk kodu '#' ile başladığı için:
//     let color = '#';
//     //?hex kodu 6 haneli olduğu için ve her bir index rastgele olacağı için bir döngü kuruyoruz
//     for(let i = 0; i < 6 ; i++){
//         color += letters[(Math.trunc(Math.random()) * 16)+1];
//         return color;
//     }
// }


// btnGenerate.addEventListener("click", ()=> {
//     let hexx = getHex();
//     hex.innerHTML = hexx;
//     document.body.style.backgroundColor = hexx;
// });
