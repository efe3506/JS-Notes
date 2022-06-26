'use strict'

//*değişkenlerin atanması
const boxes = document.querySelectorAll('.box');

//?window bir nesnedir ve tarayıcıda açık olan pencerenin içerik yüksekliğini döndürür
window.addEventListener("scroll", checkBoxes);


//*eventListener'ın belirteceğimiz tetiklenme pikseline indiğimizde event'i gerçekleştirmesi için tanımlayacağımız fonksiyon
checkBoxes()

function checkBoxes(){

    //?innerHeight özelliği, içerik alanının yüksekliğini piksel cinsinden döndürmeye yarayan bir özellik/metotdur.
    //?window.innerHeight browser'ın iç yüksekliğini temsil ediyor (console.log ile konsolda herhangi bir andaki yüksekliği görebiliriz).
    //?bölme/çarpma işlemi browser'ın iç yüksekliğinde bir tetikleyici değer oluşturmak için. Yanı aşağıya doğru kaydırma yaptığımızda bu işlemin sonucu olan piksele geldiğimizde fonksiyon çalışacak
    const triggerBottom = window.innerHeight / 5 * 4;


    //forEach metoduyla her biri için koşulunu sağlıyoruz
    boxes.forEach(box => {

        //? Element.getBoundingClientRect() yöntemi, bir öğenin boyutu ve görünüm alanına göre konumu hakkında bilgi sağlayan bir DOMRect nesnesi döndürür.
        //?DOMRect, bir dikdörtgenin boyutunu ve konumunu tanımlar.
        const boxTop = box.getBoundingClientRect().top;


        //?getBoundingClientRect ile boxTop değişkeninin görünüm alanına göre konumunu tanımlamış olduk.
        //?Bu konum piksel cinsinden tetiklenme yüksekliğinden küçükse 'show' class'ı eklenecek (aşağıya doğru sürüklendiğinde), büyükse çıkartılacak.
        if(boxTop < triggerBottom){
            box.classList.add('show');
        } else{
            box.classList.remove('show');
        }
    })
}
