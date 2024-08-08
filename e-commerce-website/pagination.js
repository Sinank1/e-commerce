let link = document.getElementsByClassName("link");
let currentValue = 1;

function activeLink(event) {
  for (let l of link) {
    l.classList.remove("active");
  }
  event.target.classList.add("active");
  currentValue = parseInt(event.target.getAttribute("value"));
}

function backBtn() {
  if (currentValue > 1) {
    for (let l of link) {
      l.classList.remove("active");
    }
    currentValue--;
    link[currentValue - 1].classList.add("active");
  }
}

function nextBtn() {
  if (currentValue < 10) {
    for (let l of link) {
      l.classList.remove("active");
    }
    currentValue++;
    link[currentValue - 1].classList.add("active");
  }
}
