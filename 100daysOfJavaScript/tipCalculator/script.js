'use strict'

//değişkenler
const btn = document.querySelector('.btn');
const tip = document.querySelector('.tip');
const total = document.querySelector('.total');
const error = document.querySelector('.error');

//Hatayı sakla Fonksiyonu

const hideError = () =>{
    setTimeout(()=>{
        error.style.display = "none"
    },3000)
}

//Hesaplayıcı fonksiyon

const calculateTip = () => {
    //inputlara girilen değer ile işlem yapacağız:
    const bill = document.querySelector('.bill').value;
    const rate = document.querySelector('.rate').value;

    //inputlara değer girilmemişse:
    if(bill === "" || rate == ""){
        error.style.display = "block"
        hideError();
    } 
    //inputlara rakam dışı bir değer girilmişse:
    else if(isNaN(bill)){
        error.textContent = "Lütfen bir rakam girin";
        error.style.display = "block";
        hideError();
    } 
    //İnputlara girilen değerler doğruysa işlemi yap:
    else{
        let tipAmt = bill * rate;
        tipAmt = Math.ceil(tipAmt);

        tip.innerHTML = `Tip: ${tipAmt}TL`;
        let totalBill = Number(bill) + tipAmt;
        total.innerHTML = `Toplam Tutar: ${totalBill}TL`;
    }

}


//buttona click eventi:
btn.addEventListener('click', calculateTip);
