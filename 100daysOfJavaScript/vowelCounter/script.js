'use strict'

//*Değişkenlerimiz
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const word = document.querySelector(".input-text");


//*Buttona tıklanınca gerçekleşecek olay
btn.addEventListener("click", countWovel);


//*Sesli harfleri sayacak olan fonksiyon
function countWovel(){
    //?kuracağımız döngüde sesli harfle karşılaşılınca, bunların sayısını atayabileceğimiz bir değişken oluşturuyoruz
    let wovelCount = 0;
    //?girilen kelimenin tüm harflerinin aynı olması için toLowerCase ya da toUpperCase kullanmalıyız çünkü JS case sensitive bir dil. Kullanıcı büyüklü küçüklü harf girebilir. Bunu yapmadığımız takdirde sorguya sesli harflerin bir de büyük harflerini girmemiz gerekir. Bu yüzden input text'ine ulaşıp değerini lower/uppercase ile eşitlemeliyiz.
    let wordVal = word.value.toLowerCase();

    for(let i = 0; i < wordVal.length ; i++){
        //?döngü input text'inde gezinecek ve her döngü kontrolünde koşulumuza uyan değeri aşağıdaki değişkenimize atayacak
        let letter = wordVal[i];
        //?döngüdeki koşul sorgumuzda .match(//) metodunu kullanıyoruz(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match). Bu metod bir synthaxına uygun şekilde girilen ifade ile içerisinde aranan eşleşmelerin sonucunu alır. Bu durumda letters.match(/[a,e,ı,i,o,ö,u,ü]/) diyerek letters içerisindeki match ifadelerine eşleşen sonuçları alır. Bu eşleşmeler oluyorsa wovelCount değişkenine her eşleşmede +1 değer atar.
        if(letter.match(/[a,e,ı,i,o,ö,u,ü]/)){
            wovelCount++;
        }
    }
    result.textContent = `${word.value.toUpperCase()} ${wovelCount} tane sesli harf içeriyor`
}