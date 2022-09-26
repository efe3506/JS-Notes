function UI() {
  (this.btn_start = document.querySelector(".btn_start")),
    (this.btn_next = document.querySelector(".next_btn")),
    (this.btn_replay = document.querySelector(".btn_replay")),
    (this.btn_quit = document.querySelector(".btn_quit")),
    (this.quiz_box = document.querySelector(".quiz_box")),
    (this.score_box = document.querySelector(".score_box")),
    (this.optionList = document.querySelector(".option_list")),
    (this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>'),
    (this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>')
}

UI.prototype.soruGöster = function (soru) {
  let question = `<span>${soru.soruMetni}</span>`;
  let options = "";

  for (let cevap in soru.cevapSecenekleri) {
    options += `
      <div class="option">
        <span><strong>${cevap}</strong>: ${soru.cevapSecenekleri[cevap]}</span>
      </div>
      `;
  }

  document.querySelector(".question_text").innerHTML = question;
  this.optionList.innerHTML = options;

  const option = this.optionList.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute("onClick", "optionSelected(this)");
  }
};

UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-info p-2">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag
  }

UI.prototype.skoruGoster = function(toplamSoru, dogruCevap) {
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz.`;
    document.querySelector(".score_text").innerHTML = tag
}
