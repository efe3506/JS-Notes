'use strict';


function yaşHesap(doğumYılı){
    const yaş = 2022 - doğumYılı;
    // console.log(isim);
    function yaşıYazdır(){
        let çıktı = `${isim}, ${doğumYılı} doğumlu ${yaş} yaşında`
        console.log(çıktı);

        if(doğumYılı >= 1996 && doğumYılı <=2006){
            var millenial =true
            const isim = 'Namık'
            const str = `${isim} millenial kuşağında doğmuş`
            console.log(str);
            function ekle (a, b){
                return a + b;
            }
            // çıktı = 'yeni çıktı'
            const çıktı = 'Yeni çıktı'
        }
        // console.log(str);
        // console.log(ekle(2,3));
        console.log(millenial);
        console.log(çıktı);
    }

    yaşıYazdır();
    return yaş;
}

const isim = 'Efe';
yaşHesap(1996);
// console.log(yaş);
// yaşıYazdır();