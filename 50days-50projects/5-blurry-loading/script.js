//* Ulaşacağımız iki elemanı 2 değişkene atıyoruz.
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

//*fonksiyon içerisinde yüklenme 0'dan 100'e artacağı için bunu global scope'ta bir değişkene let ile atıyoruz.
let load = 0


//*setInterval metodu, belirtilen aralıklarda(milisaniye) bir işlevi çalıştırır.
let int = setInterval(blurring, 30)

function blurring () {
    load++

    if(load > 99){
        //*setInterval metodu, clearInterval çağırılıncaa kadar çalışmaya devam eder. Bu yüzden load değişkeni 99'dan büyük olduğu ilk durumda (yani 100'e ulaştığında) clearInterval çağırılır ve setIntervarl durdurulur.
        clearInterval(int);
    }

    //*HTML'de loading-text class'ında ekranda gösterilecek olan yüklenme yazısı için:
    loadText.textContent = `${load}%`;

    //*Blurlu yükleme ekranında arkaplanın maksimum blurdan net hale gelmesini sağlıyoruz:
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}


//!stackoverflow denklemi => loading 1'den 100'e giderken opasitenin 1'den 0'a inmesini sağlayacak bir fonksiyon
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}