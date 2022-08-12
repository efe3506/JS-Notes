"use strict";
//? conversion formulas
// -- From celcius to --
// fahrenheit = (x*1.8)+32;
// kelvin = x+273.15;

// -- From fahrenheit to --
// celcius = (x-32)/1.8;
// kelvin = ((x-32)/1.8)+273.15;

// -- From kelvin to --
// fahrenheit = ((x-273.15)*1.8)+32;
//   celcius = x-273.15;

//değişkenler

let celsius = document.querySelector(".celsius");
let fahrenheit = document.querySelector(".fahrenheit");
let kelvin = document.querySelector(".kelvin");
//event delegation ile inputların parent'ına eventListener ver(tek tek bütün ağırlık değerlerine eventListener vermemek için)
let form = document.querySelector("form");

form.addEventListener("input", convertTemp);

function convertTemp(e) {
  if (e.target.classList.contains("celsius")) {
    let x = e.target.value;
    fahrenheit.value = parseFloat(x) * 1.8 + 32;
    kelvin.value = parseFloat(x) + 273.15;
  }
  if (e.target.classList.contains("fahrenheit")) {
    let x = e.target.value;
    celsius.value = (parseFloat(x) - 32) / 1.8;
    kelvin.value = (parseFloat(x) - 32) / 1.8 + 273.15;
  }
  if (e.target.classList.contains("kelvin")) {
    let x = e.target.value;
    celsius.value = (parseFloat(x) - 273.15) * 1.8 + 32;
    fahrenheit.value = parseFloat(x) - 273.15;
  }
}
