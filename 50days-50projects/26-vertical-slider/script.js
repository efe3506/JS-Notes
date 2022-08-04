'use strict'

//değişkenler
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

//img ve h/p tagleri birbirinin üzerinde olduğu için hangi indexte olduğumuzu bilmemiz gerekli
let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

//iki button da aynı fonksiyonu farklı parametre ile çağıracak(direction)
upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))


const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    //yönü kontrol et
    if(direction === 'up'){
        activeSlideIndex++
        //son slayta ulaştığımızda
        if(activeSlideIndex > slidesLength -1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    //Sağ kısım yukarı çıksın
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    //sol taraf aşağı insin
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}