// counter kısmı
const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  num = document.querySelector(".num");

let a = 1;
plus.addEventListener("click", () => {
  a++;
  a = a;
  num.innerText = a;
});

minus.addEventListener("click", () => {
  if (a > 0) {
    a--;
    a = a;
    num.innerText = a;
  }
});

// renk seçme kısmı
document.querySelectorAll(".color-select .colors div").forEach((colorDiv) => {
  colorDiv.addEventListener("click", function () {
    document.querySelectorAll(".color-select .colors div").forEach((div) => {
      div.classList.remove("selected");
    });
    this.classList.add("selected");
  });
});

// size seçme kısmı
document.querySelectorAll(".choose-size .sizes div").forEach((sizeDiv) => {
  sizeDiv.addEventListener("click", function () {
    document.querySelectorAll(".choose-size .sizes div ").forEach((div) => {
      div.classList.remove("selected");
    });
    this.classList.add("selected");
  });
});

// görüntü seçme kısmı

// Tüm renkli divler için bir tıklama olayı ekle
document.querySelectorAll("#div1, #div2, #div3").forEach((div) => {
  div.addEventListener("click", function () {
    // Seçili div'e border ekle
    document.querySelectorAll("#div1, #div2, #div3").forEach((d) => {
      d.classList.remove("selected");
    });
    this.classList.add("selected");

    // div4'ün arka plan rengini güncelle
    const div4 = document.querySelector("#div4");
    div4.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
  });
});
