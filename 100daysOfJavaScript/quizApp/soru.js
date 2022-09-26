function Question(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
  //   console.log(this);
}

Question.prototype.cevabıKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Question(
    "1-Hangisi bir JavaScript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "nugget", c: "Npm", d: "Nuget" },
    "c"
  ),
  new Question(
    "2-Hangisi bir JavaScript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "nugget", c: "Npm" },
    "c"
  ),
  new Question(
    "3-Hangisi bir JavaScript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "nugget", c: "Npm" },
    "c"
  ),
  new Question(
    "4-Hangisi bir JavaScript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "nugget", c: "Npm" },
    "c"
  ),
];
