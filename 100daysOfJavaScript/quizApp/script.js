//OOP: Object Orianted Programming
//*Object

// let soru = {
//   soruMetni: "Hangisi bir JavaScript paket yönetim uygulamasıdır?",
//   cevapSecenekleri: {
//     a: "Node.js",
//     b: "TypeScript",
//     c: "Npm",
//   },
//   dogruCevap: "c",
//   cevabiKontrolEt: function (cevap) {
//     return cevap === this.dogruCevap;
//   },
// };

// let soru2 = {
//   soruMetni: "Hangisi bir .Net paket yönetim uygulamasıdır?",
//   cevapSecenekleri: {
//     a: "Node.js",
//     b: "nugget",
//     c: "Npm",
//   },
//   dogruCevap: "b",
//   cevabiKontrolEt: function (cevap) {
//     return cevap === this.dogruCevap;
//   },
// };

// console.log(soru1.soruMetni);
// console.log(soru1.cevabiKontrolEt("c"));
// console.log(soru2.cevabiKontrolEt("b"));

//Sınıf, Constructor => nesne * 30
//ES5, ES6, ES7

//Constructor

//?Sınıf tanımladığımız için isimi büyük harfle tanımlamaya dikkat et

// let soru1 = new Question(
//   "Hangisi bir JavaScript paket yönetim uygulamasıdır?",
//   { a: "Node.js", b: "nugget", c: "Npm" },
//   "c"
// );
// let soru2 = new Question(
//   "Hangisi bir .Net paket yönetim uygulamasıdır??",
//   { a: "Node.js", b: "nugget", c: "Npm" },
//   "b"
// );

const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", () => {
  ui.quiz_box.classList.add("active");
  ui.soruGöster(quiz.soruGetir());
  ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener("click", () => {
  if (quiz.soruIndex + 1 !== quiz.sorular.length) {
    quiz.soruIndex++;
    ui.soruGöster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);

    ui.btn_next.classList.remove("show");
  } else {
    console.log("quiz bitti kardeş, zorlama");
    ui.score_box.classList.add("active");
    ui.quiz_box.classList.remove("active");
    ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
  }
});

ui.btn_quit.addEventListener("click", () => {
  window.location.reload();
});

ui.btn_replay.addEventListener("click", () => {
  quiz.soruIndex = 0;
  quiz.dogruCevapSayisi = 0;
  ui.btn_start.click();
  ui.score_box.classList.remove("active");
})

function optionSelected(option) {
  let cevap = option.querySelector("span strong").textContent;
  let soru = quiz.soruGetir();

  if (soru.cevabıKontrolEt(cevap)) {
    quiz.dogruCevapSayisi++;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }

  for (let i = 0; i < ui.optionList.children.length; i++) {
    ui.optionList.children[i].classList.add("disabled");
  }

  ui.btn_next.classList.add("show");
}
