'use strict'

const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')


toggles.forEach(toggle => toggle.addEventListener('change', (e) => clickTarget(e.target)))

function clickTarget (clickedOne){
    if(good.checked && cheap.checked && fast.checked){
        if(good === clickedOne){
            fast.checked = false
        }

        if(cheap === clickedOne){
            good.checked = false
        }

        if(fast === clickedOne){
            cheap.checked = false
        }
    } 
}