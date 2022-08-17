const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
        //setTimeout kullanılmazsa direkt olarak ilk indexe 1 ekleyerek bir sonraki kutuya geçer 
        codes[idx].value = ''
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === 'Backspace'){
      setTimeout(() => codes[idx - 1].focus(), 10);

    }
  });
});
