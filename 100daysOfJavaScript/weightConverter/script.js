"use strict";
//? conversion formulas
// -- From pounds to --
// kilograms = x / 2.2046;
// grams = x / 0.0022046;
// ounces = x * 16;

// -- From Kilogram to --
// pounds = x * 2.2046;
// grams = x * 1000;
// ounces = x * 35.274;

// -- From Gram to --
// kilograms = x / 1000;
//   pounds = x * 0.0022046;
//   ounces = x * 0.035274;

// -- From Ounce to --
// kilograms = x / 35.274;
// grams = x / 0.035274;
// pounds = x * 0.0625;

//değişkenler

let pounds = document.querySelector(".pounds");
let kilograms = document.querySelector(".kilograms");
let grams = document.querySelector(".grams");
let ounces = document.querySelector(".ounces");
//event delegation ile inputların parent'ına eventListener ver(tek tek bütün ağırlık değerlerine eventListener vermemek için)
let form = document.querySelector("form");

//pounds converter

form.addEventListener("input", convertWeight);

function convertWeight(e) {
  if (e.target.classList.contains("pounds")) {
    let x = e.target.value;
    kilograms.value = (x / 2.2046).toFixed(3);
    grams.value = (x / 0.0022046).toFixed(3);
    ounces.value = (x * 16).toFixed(3);
  }
  if (e.target.classList.contains("kilograms")) {
    let x = e.target.value;
    pounds.value = (x * 2.2046).toFixed(3);
    grams.value = (x * 1000).toFixed(3);
    ounces.value = (x * 35.274).toFixed(3);
  }
  if (e.target.classList.contains("grams")) {
    let x = e.target.value;
    kilograms.value = (x / 1000).toFixed(3);
    pounds.value = (x * 0.0022046).toFixed(3);
    ounces.value = (x * 0.035274).toFixed(3);
  }
  if (e.target.classList.contains("ounces")) {
    let x = e.target.value;
    kilograms.value = (x / 35.274).toFixed(3);
    grams.value = (x / 0.035274).toFixed(3);
    pounds.value = (x * 0.0625).toFixed(3);
  }
}
