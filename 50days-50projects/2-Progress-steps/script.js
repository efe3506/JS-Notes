//Manipüle edilecek class'ları / id'lerı kodlarken kolay çağırılması adına değişkenlere atadım

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


//progress bar 1'den başlayıp 4'e gideceği için let ile değişken oluşturdum
let currentActive = 1


//Next'e tıklandığında gerçekleşecek olay için eventlistener  bloğu
next.addEventListener('click', function(){
    //next'e her tıklandığında bulunan active bir ilerleyeceği için atanan currentActive değişkenine ++ ekledim
    currentActive++

    // if(currentActive > circles.length) {
    //     currentActive = circles.length
    // }

    update()
})

prev.addEventListener('click', function(){
    currentActive--

    // if(currentActive < 1) {
    //     currentActive = 1
    // }

    update()
})

//click eventinin (next veya prev) gerçekleştireceği fonksiyonu update adında yazdım
function update() {

    //progress-container içerisindeki bütün circle class'ına sahip divler için forEach ile fonksiyon çalıştırdım
    circles.forEach(function(circle, idx){
        //idx currentActive değişkeninden (1-4 arası anlık bulunan yerden) kuçükse active class'ı ekleyerek dairenin mavi rengi almasını sağlayacak. Değilse de class'ı silerek dairenin pasif rengine dönmesini sağlayacak.
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    //daireleri takip eden x eksenindeki ilerleme çubuğu için querySelectorAll ile bütün active classlarını seçtim.
    const actives = document.querySelectorAll('.active')

    //progress-container genişliği boyunca ilerleme çubuğu genişleyeceği için matematik hesabı yaptım. active class'ına sahip div dizisinin uzunluğunu dağire dizisinin uzunluğuna bölüp, css'e % değer verileceği için sonucu 100 ile çarpıp syntax gereği + operatörü ile css'e '%' ekledim.
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    //buttonların ilk durumda ya da son durumda bulunmalarına göre daha fazla geri ya da ileri gidememesini gösteren disable koşul bloğu:
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}