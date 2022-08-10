"use strict";

const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  const input = e.target.value;

  //input özel karakter içeriyorsa true 
  function containsSpecialChars(input) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(input);
  }
  const length = input.length;
  const blurValue1 = 20 - length * 2;
  const blurValue2 = 20 - length * 4;

  //input özel karakter içeriyorsa 2kat güçlü
  if (containsSpecialChars(input)) {
    background.style.filter = `blur(${blurValue2}px)`;
  } else {
    background.style.filter = `blur(${blurValue1}px)`;
  }
});
