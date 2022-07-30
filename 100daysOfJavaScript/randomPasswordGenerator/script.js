'use strict'

const empty = "";
const uCase = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const lCase = "abcdefghijklmnoprstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

//değişkenler
const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submitBtn = document.getElementById("submit");
const password = document.getElementById("password");
const copy = document.getElementById("copy");



//eventListener
submitBtn.addEventListener('click', () => {
    let initialPassword = empty;
    //Eğer seçenek seçiliyse karakter ekle 
    upperCase.checked ? (initialPassword += uCase) : "";
    lowerCase.checked ? (initialPassword += lCase) : "";
    pNumber.checked ? (initialPassword += number) : "";
    pSymbol.checked ? (initialPassword += symbol) : "";

    password.value = generatePassword(pLength.value, initialPassword)
});

copy.addEventListener("click", () => {
    if(password.value == ""){
        alert("Lütfen bir şifre oluşturun.")
    } else{
        password.select();
        document.execCommand("copy");
        alert("Şifreniz kopyalandı.")
    }
})


//password oluştur
function generatePassword(l, initialPassword){
    let pass = "";

    for(let i = 0; i < l ;i++){
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return pass
}