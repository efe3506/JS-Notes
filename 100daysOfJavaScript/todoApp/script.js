'use strict'

//değişkenler
const input = document.querySelector('input');
const inputBtn = document.querySelector('button')
const todoList = document.querySelector('.todo-list')
const clearBtn = document.querySelector('.clear')


//Listeye eleman ekle
const addTask = (e) =>{
    e.preventDefault();
    const newLi = document.createElement('li');
    const delBtn = document.createElement('button');

    delBtn.innerHTML = "<i class='ri-delete-bin-line'>";

    if(input.value !== ""){
        newLi.textContent = input.value;
        newLi.appendChild(delBtn);
        todoList.appendChild(newLi);
        input.value = "";
    } else{
        alert("Lütfen yapılacak bir şey girin")
    }
    //listeden eleman sil
    delBtn.addEventListener("click", function(){
        const del = confirm("Silmek istediğinize emin misiniz?");
        if(del == true){
            const parent = this.parentNode;
            parent.remove();
        }
    })
}

//hepsini sil
clearBtn.addEventListener("click", ()=>{
    const delAll = confirm("Hepsini silmek istediğinize emin misiniz?");
        if(delAll == true){
            todoList.innerHTML = "";
        }
})

//eventListener 
inputBtn.addEventListener('click', addTask);