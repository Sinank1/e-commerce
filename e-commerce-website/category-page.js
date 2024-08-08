function togglePriceFilter() {
  const priceFilter = document.querySelector(".price-filter");
  const arrow = document.querySelector(".arrow");
  priceFilter.classList.toggle("open");
  arrow.classList.toggle("rotated");
}

function updateRange() {
  const minRange = document.getElementById("minRange");
  const maxRange = document.getElementById("maxRange");
  const minPriceLabel = document.getElementById("minPriceLabel");
  const maxPriceLabel = document.getElementById("maxPriceLabel");
  const sliderTrack = document.querySelector(".slider-track");

  let minPrice = parseInt(minRange.value);
  let maxPrice = parseInt(maxRange.value);

  if (minPrice > maxPrice) {
    let temp = minPrice;
    minPrice = maxPrice;
    maxPrice = temp;
  }

  minPriceLabel.textContent = `$${minPrice}`;
  maxPriceLabel.textContent = `$${maxPrice}`;

  const rangePercentMin = (minPrice / minRange.max) * 100;
  const rangePercentMax = (maxPrice / maxRange.max) * 100;

  minPriceLabel.style.left = rangePercentMin + "%";
  maxPriceLabel.style.left = rangePercentMax + "%";

  sliderTrack.style.left = rangePercentMin + "%";
  sliderTrack.style.right = 100 - rangePercentMax + "%";
}

// İlk değerleri güncelle
document.addEventListener("DOMContentLoaded", updateRange);

function toggleFilterContainer() {
  const filterContent = document.querySelector(".filter-content");
  const arrow = document.querySelector(".arrow");
  filterContent.classList.toggle("open");
  arrow.classList.toggle("rotated");
}

function toggleDressContainer() {
  const dressContent = document.querySelector(".dress-content");
  const arrow = document.querySelector(".dress-header .arrow");
  dressContent.classList.toggle("open");
  arrow.classList.toggle("rotated");
}
// renk seçme kısmı
function toggleColorContainer() {
  const colorFilter = document.querySelector(".color-filter");
  const arrow = document.querySelector(".arrow");
  colorFilter.classList.toggle("open");
  arrow.classList.toggle("rotated");
}

function selectColor(element) {
  const colorBoxes = document.querySelectorAll(".color-box");
  colorBoxes.forEach((box) => box.classList.remove("selected")); // Seçili olanı kaldır
  element.classList.add("selected"); // Seçili olanı ekle
}

function toggleSizeContainer() {
  const sizeContent = document.querySelector(".size-content");
  const arrow = document.querySelector(".size-header .arrow");
  sizeContent.classList.toggle("open");
  arrow.classList.toggle("rotated");
}

function selectSize(element) {
  const sizeBoxes = document.querySelectorAll(".size-box");
  sizeBoxes.forEach((box) => box.classList.remove("selected")); // Seçili olanı kaldır
  element.classList.add("selected"); // Seçili olanı ekle
}

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
