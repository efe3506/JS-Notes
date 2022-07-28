'use strict'

const main =document.getElementById('main');
const addUserBtn =document.getElementById('add-user');
const doubleBtn =document.getElementById('double');
const showMillionersBtn =document.getElementById('show-millionaires');
const sortBtn =document.getElementById('sort');
const calculateWealthBtn =document.getElementById('calculate-wealth');


let data = [];

//fetch random user and money
async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };
    
    // console.log(data);
    addData(newUser);

}

// getRandomUser()

//Double money
//*map()
function doubleMoney(){
    data = data.map((user) => {
        return { ...user, money: user.money * 2 }
    })

    updateDOM();
}



//*map() END

//Sort users by richest
//*sort()

function sortByRichest (){
    data.sort((a,b) => b.money - a.money);

    updateDOM()
}

//*sort() END

//Show millioners
//*filter()
function showMillioners(){
    data = data.filter(user => user.money > 999999);

    updateDOM();
}

//*filter() END

//Calculate total wealth
//*reduce()

function calculateWealth(){
    const wealth = data.reduce((acc, user) => (acc += user.money), 0)

    // console.log(formatMoney(wealth));
    const wealthEl= document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong>`;
    wealthEl.classList.add('font-set')
    main.appendChild(wealthEl);
}

//*reduce() END


//Add new obj to data arr
function addData(obj){
    data.push(obj);

    updateDOM();
}

//update DOM

//*forEach
function updateDOM(providedData = data){
    //clear main div
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;

    providedData.forEach(person => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${person.name}</strong> ${formatMoney(person.money)}`;

        main.appendChild(element);
    })
}

//format number as money- https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings - Short and fast solution (works everywhere!)

function formatMoney(number){
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


//*forEach END

//event listeners
addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubleMoney)
sortBtn.addEventListener('click', sortByRichest)
showMillionersBtn.addEventListener('click', showMillioners)
calculateWealthBtn.addEventListener('click', calculateWealth)
