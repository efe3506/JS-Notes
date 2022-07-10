'use strict'

//değişkenler
const countTo = "1 Jan 2023"
const countDown = document.getElementById('countdown');


const c = setInterval(() =>{
    //sayacın ulasacagi tarih countTo
    const endDate = new Date(countTo);
    const currentDate = new Date();
    // console.log(currentDate);
    const totalSeconds = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    countDown.textContent = `${days}Gün ${format(hours)}sa:${format(minutes)}dk:${format(seconds)}s`;

    if(totalSeconds < 0){
        clearInterval(c);
        countDown.textContent = "Yeni Yılınız Kutlu olsun !"
    }
}, 1000);

function format(t){
    return t < 10 ? `0${t}` : t;
}