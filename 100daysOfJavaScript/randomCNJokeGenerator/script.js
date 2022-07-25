"use strict";
//API link: https://www.icndb.com/api/

//*Değişkenler

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const URL = "http://api.icndb.com/jokes/random?limitTo=[nerdy]";

btn.addEventListener("click", getJoke);

//promise response'u res değişkenine ata, res'i json formatına çevir data değişkenine ata
async function getJoke() {
    //Dene. Promise yerine getirilemezse hatayı yakala
  try {
    const res = await fetch(URL);
    const data = await res.json();

    // console.log(data);
    //data içerisinde value->joke'u joke değişkeninin html'ine yaz
    joke.innerHTML = data.value.joke;
  } catch (err){
    joke.innerHTML = `💢There is an error💢: ${err.message}`;
  }
}

//veya promise chain

// function getJoke(){
//     fetch(URL)
//     .then(res => res.json())
//     .then(data => joke.innerHTML = data.value.joke)
//     .catch(err => joke.innerHTML = `💢There is an error💢: ${err.message}`)
// }
