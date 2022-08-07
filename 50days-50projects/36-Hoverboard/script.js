"use strict";

const container = document.getElementById("container");
const colors = [
  "#2A0944",
  "#3FA796",
  "#FEC260",
  "#A10035",
  "#A66CFF",
  "#9C9EFE",
  "#B1E1FF",
];

//döngü ile oluşturulacak div sayısı
const SQUARES = 600


for(let i = 0 ; i < SQUARES ; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color 
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = "0 0 2px #000";
}


function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}