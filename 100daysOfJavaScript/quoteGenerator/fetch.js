'use strict'
//değişkenler
const btn = document.querySelector(".get-quotes");
const number = document.getElementById("number");
const URL = "https://type.fit/api/quotes";

//eventListener
btn.addEventListener("click", getQuotes);


//  Alıntıları karıştıracak fonksiyon

function shuffle(quotes) {
    let CI = quotes.length, tempValue, randomIndex;
    
    // Dizede eleman varken:
    while (CI > 0) {
        randomIndex = Math.floor(Math.random() * CI);
        // while döngüsünü inputa girilen değerden düşerek durdur
        CI--;
        // inputa girilen değerden sonra sürekli aynı alıntı dönmemesi için CI (current index) girilen sayı kadar alıntıyı karıştır.
        tempValue = quotes[CI];
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }
    return quotes;
}

//Alıntıları getir fonksiyonu / fetch API
function getQuotes(e) {
    e.preventDefault();

    //inputa girilen rakam için
    if (number.value.length == 0) {
        return alert("Plese enter a number");
    } else {
        //fetch API
        fetch(URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data = shuffle(data);
            
            let output = "";

            
            for (let i = 0; i < data.length; i++) {
                if (i == number.value) {break;}
                output += `
                    <li>Quote: ${data[i].text}</li>
                    <li>Author: ${data[i].author}</li>
                   <hr>
               `;
            }
            document.querySelector(".quotes").innerHTML = output;
        })
    }
}


