'use strict'

const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e){
        //clientX/Y özelliği, bir fare olayı tetiklendiğinde fare yatay/dikey koordinatını (istemci alanına göre) döndürür.
        const x = e.clientX
        const y = e.clientY

        //offsetTop/Left/Right/bottom özelliği, üst öğeye göre  konumu (piksel olarak) döndürür.
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        //tetiklenen fare olayının koordinatını içinde bulunduğu buttonun x/y ekseninden çıkartarak button içi konumunu bulur
        const xInside = x - buttonLeft;
        const yInside = y- buttonTop;

        // console.log(xInside, yInside);

        //button içerisine span oluşturup circle class'ı ekle. 
        const circle = document.createElement('span');
        circle.classList.add('circle');

        //eklenen classın bulunduğu yeri (tıklanan yeri) göster
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        //appendChild() yöntemi, bir öğenin son çocuğu olarak bir düğüm/node (eleman) ekler.
        this.appendChild(circle);

        //circle classı silinmediği sürece sürekli üzerine eklenir.
        setTimeout(() => circle.remove(), 300)
    })
})