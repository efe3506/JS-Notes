"use strict";

//*Değişkenler
const image = document.getElementById("image");
const image2 = document.getElementById("image2");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

//*Bağlantı başarılı olduğunda
function setColor() {
  bgColor.classList.add("online");
}

//fonksiyondan önce async, fonksiyonun bir promise döndürmesini sağlar
//Promise nesnesi, zaman uyumsuz bir işlemin tamamlanmasını (veya başarısızlığını) ve bunun sonuç değerini temsil eder.
async function connectionStatus() {
  //try ifadesi, çalıştırılacak (denenecek) bir kod bloğu tanımlar.
  try {
    //belirttiğimiz fotoğraf linkine ulaşmaya çalışarak internet bağlantısı kontrol edilmiş olacak. Ulaşamadığında status offline demek olacak
    const fetchResult = await fetch(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Gabe_Newell_GDC_2010.jpg/1024px-Gabe_Newell_GDC_2010.jpg?time=" + new Date().getTime()
    );
    image.src = "./images/online.png";
    setColor();
    //status 200 internete bağlantı mevcut demek
    return fetchResult.status >= 200 && fetchResult.status < 300;
  } catch (error) {
    //Catch ifadesi, herhangi bir hatayı işlemek için bir kod bloğu tanımlar.
    console.error(error);
    statusDisplay.textContent = "OOPS!!! Your Internet Connection is Down.";
    image.src = "./images/offline.png";
    image2.src = "./images/offline2.jpeg";
    bgColor.classList.remove("online");
  }
}



//*Bağlantıyı 
setInterval(async () => {
    //await operatörü, bir promiseı beklemek için kullanılır. Yalnızca normal JavaScript kodundaki bir async fonksiyonun içinde kullanılabilir.
  const result = await connectionStatus();
  if (result) {
    statusDisplay.textContent = "You're ONLINE!!! Connection looks good.";
    image2.src = "./images/online2.jpeg"
    setColor();
  }
}, 5000);




//*Sayfa yüklenir yüklenmez gerçekleştirilecek event. setInterval ile belirlediğimiz değişiklikler bu event sonrası yüklenecek
window.addEventListener("load", async (event) => {
  if (connectionStatus()) {
    statusDisplay.textContent = "Online";
  } else {
    statusDisplay.textContent = "OFFline";
  }
});
