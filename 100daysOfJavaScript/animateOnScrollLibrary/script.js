'use strict'

//değişkenler
const links = document.querySelectorAll('.nav-list li a')


//for...of ifadesi, yinelenebilir nesneler üzerinde yinelenen bir döngü oluşturur
for(let link of links){
    link.addEventListener('click', smoothScroll)
}

function smoothScroll(e){
    e.preventDefault();

    const href = this.getAttribute("href");
    //scrollIntoView() yöntemi, bir öğeyi tarayıcı penceresinin görünür alanına kaydırır.
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}

//---sticky header---

//global window'a event ekle => scrollY. Scroll event'i başlar başlamaz tetikle => scrollY > 0
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

});

//scroll indicator
//global window scrolla başladığında fonksiyonu çalıştır
window.onscroll = () => scrollProgress ();

function scrollProgress () {
    //ilk atama safari browser için, ikincisi de chrome/mozilla
    const currentState = document.body.scrollTop || document.documentElement.scrollTop;
    //sayfadaki y eksenindeki anlık lokasyon
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //kaydırma yüzdesi
    const scrollPercentage = (currentState / pageHeight) * 100;

    //DOM manipülasyonu
    const progressBar = document.querySelector('.progress');
    progressBar.style.visibility = 'visible';
    progressBar.style.width = scrollPercentage + "%";
}

//animate on scroll
AOS.init({
    duration: 1000,
  });