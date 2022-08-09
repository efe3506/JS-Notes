"use strict";

//Değişkenler

const keys = document.getElementsByTagName("li");
const result = document.querySelector("p");
const clear = document.querySelector(".clear");

for (let i = 0; i < keys.length; i++) {
  //herhangi bir tuşa basıldığında
  if (keys[i].innerHTML === "=") {
    keys[i].addEventListener("click", calculate);
  } else {
    keys[i].addEventListener("click", addToCurrentValue(i));
  }
}

function addToCurrentValue(i) {
  return () => {
    //basılan tuş x ise ekranda * göster değilse basılan tuşu göster
    if (keys[i].innerHTML === "x") {
      result.innerHTML += "*";
    } else {
      result.innerHTML += keys[i].innerHTML;
    }
  };
}

function calculate() {
  //eval() fonksiyonu, bir dize olarak gösterilen JavaScript kodunu alır ve tamamlama değerini döndürür. ÖR: eval('2 + 2') = 4
  return (result.innerHTML = eval(result.innerHTML));
}

clear.addEventListener("click", () => {
  result.innerHTML = "";
});
