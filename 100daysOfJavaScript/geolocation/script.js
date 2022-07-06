'use strict'

//*değişkenler

const userLocation = document.querySelector('.location');
const btn = document.querySelector('.btn');
const img = document.querySelector('.image');

//*eventListener callback fonksiyonu ile çağırılacak fonksiyon
function showPosition(position){
    img.src = "./images/buradasınız.jpg"
    userLocation.innerHTML = `
    Enlem: ${position.coords.latitude} <br>
    Boylam: ${position.coords.longitude}`
}


//*eventListener
btn.addEventListener("click", () => {
    //Geolocation API'si, kullanıcının isterse web uygulamalarına konumlarını sağlamasına olanak tanıyan bir web API'sidir (https://developer.mozilla.org/en-US/docs/Web/API).
    //Geolocation.getCurrentPosition() yöntemi, cihazın mevcut konumunu almak için kullanılır.
    navigator.geolocation.getCurrentPosition(showPosition);
})
