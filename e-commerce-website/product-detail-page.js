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
document.addEventListener("DOMContentLoaded", () => {
  const smallImages = document.querySelectorAll("#div1, #div2, #div3");
  const largeImage = document.getElementById("large-image");

  smallImages.forEach((div) => {
    div.addEventListener("click", () => {
      const img = div.querySelector("img");
      if (img && largeImage) {
        largeImage.src = img.src;
      }
    });
  });
});
