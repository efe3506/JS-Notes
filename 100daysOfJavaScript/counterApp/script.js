//*Öncelikle değişkenlerimizi tanımlıyoruz

// const add = document.querySelector('.add');
//reset buttonu için değişken adı reset demek istedim fakat bu JS'te sonuç adı. Hata Çıkartabilir
// const resetCount = document.querySelector('.reset');
// const sub = document.querySelector('.subtract');
//*3 ayrı eventListener yerine parent elemente tek bir eventListener eklemek için buttonları içeren dive ulaşıyoruz bu durumda yukarıda tanımladığımız 3 button değişkenine gerek kalmıyor.
const buttons = document.querySelector('.buttons');
const count = document.querySelector('.count');


//*Tek eventListener ile 3 olay oluşturmak / event delegation in JS/
buttons.addEventListener("click", (e) => {
    //! target özelliği, eventi tetikleyen öğeyi döndürür. Eventi tetikleyen öğe classList.contain('') ile şu class'ı içeriyorsa koşul içerisindeki komutu yap
    if(e.target.classList.contains('add')){
        count.textContent++;
        setColor();
    }
    if(e.target.classList.contains('subtract')){
        count.textContent--;
        setColor();
    }
    if(e.target.classList.contains('reset')){
        count.textContent = 0;
        setColor();
    }
})

//*Sayılar eksi veya artı değerdeyken alacakları renk özelliği
function setColor() {
    if(count.textContent > 0){
        count.style.color = "#25D366";
    } else if(count.textContent < 0){
        count.style.color = "#E50914";
    } else{
        count.style.color = "#DCD7C9"
    }
}




//*Buttonlara tıklama ile oluşacak olaylar => artır/azalt/yenile:
// add.addEventListener("click", ()=>{
//     count.textContent++; //veya count.innerHTML++
// });

// sub.addEventListener("click", ()=>{
//     count.textContent--; //veya count.innerHTML--
// });

// resetCount.addEventListener("click", () => {
//     count.textContent = 0;
// })