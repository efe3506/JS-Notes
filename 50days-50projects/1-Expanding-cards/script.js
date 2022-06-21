//Birden fazla panel olduğu için querySelectorAll kullandım.

const panels = document.querySelectorAll('.panel');

//.panel adında 5 div içeren bir değişkende eventin hepsine uygulanması için forEach kullandım

panels.forEach(function(panel){
    panel.addEventListener("click", function(){
        //active class'ı cardların genişlemesini sağlayan sınıf. Bu yüzden her click ile eklenen active class'ı sonrası bir öncekinin silinmesi gerekiyor. Yoksa bütün kartlar genişlemeye çalışır. Bunun için bir fonksiyon yazdım.
        //Top to bottom özellik ile tıklama sonrası tüm active class'ları silinecek ve ardından tıklanan carda active class'ı eklenecek
        removeActiveClass();
        panel.classList.add("active");
    })
})

//active class'larını silecek fonksiyon. panels içerisindeki bütün '.panel' sınıflarına ulaş ve varsa active class'ını sil
const removeActiveClass = function(){
    panels.forEach(function(panel){
        panel.classList.remove("active")
    })
}