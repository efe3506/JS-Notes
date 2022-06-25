//*cağıralacak olan elemanları değişkenlere atıyorum.
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

//*Mouse büyüteç üzerine geldiğinde oluşacak olan olay (eventListener)

btn.addEventListener("click", () => {
    search.classList.toggle('active');
    input.focus()
})

