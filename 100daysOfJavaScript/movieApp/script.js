"use strict";

//fetch icin api url
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f221dd29fedf57fa783ad25382d94849&language=tr";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API ='https://api.themoviedb.org/3/search/movie?api_key=f221dd29fedf57fa783ad25382d94849&language=tr&query="';

//Değişkenler
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const searchBtn = document.querySelector('.search-btn');
const backBtn = document.querySelector('.back-to-home');

//başlangıçtaki filmleri yükle

getMovies(API_URL);

//promise oluştur
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
  console.log(data.results);
}

//promise gerçekleştirilince gerçekleştir
function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach((movie) => {
    //APİ'den gelen verilerden kullanacaklarımızı destructing ile ata
    const { title, poster_path, vote_average, overview } = movie;

    //div oluştur ve movieEl'e ata
    const movieEl = document.createElement("div");
    //movieEl'in işaret ettiği div'e "movie" class'ı ekle
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Özet</h3>
          <p>${overview}</p>
        </div>
      `;
    //main içerisine movieEl ekle ("movie" classına sahip div)
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 7) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});

searchBtn.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const searchTerm = search.value;
  
    if (searchTerm && searchTerm !== "") {
      getMovies(SEARCH_API + searchTerm);
      search.value = "";
    } else {
      window.location.reload();
    }
  });

  backBtn.addEventListener("click", ()=>{
    getMovies(API_URL);
    showMovies()
  });
