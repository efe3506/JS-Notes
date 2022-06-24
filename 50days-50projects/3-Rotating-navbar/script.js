//* Manipüle edeceğimiz objeleri değişkenlere atarak eventListener için ulaşım kolaylığı sağlıyoruz.
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


//* open değişkenine yanı open ID'sine sahip olan navigasyon iconnuna tıklandığında show-nav class'ı ekleyerek bu klasa tanımlanmış olan css özelliklerini ekleyecek. Bu özellikler container'ın 70 derce dönmesini sağlayacak.
open.addEventListener('click', function() {
    container.classList.add('show-nav')
})

//* aynı şekilde close değişkenine tıklandığında (kapatma iconu/buttonu) show-nav class'ını silerek container'ın default özelliklere geri dönmesini sağlayacak.
close.addEventListener('click', function() {
    container.classList.remove('show-nav')
})