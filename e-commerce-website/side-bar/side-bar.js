$(".btn").click(function () {
  $(this).toggleClass("click");
  $(".sidebar").toggleClass("show");
});
function toggleFilter() {
  const priceFilter = document.querySelector(".filter-content");
  const arrow = document.querySelector(".arrow");
  priceFilter.classList.toggle("open");
  arrow.classList.toggle("rotated");
}

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

const totalPages = 10; // Total number of pages
let currentPage = 1; // Current active page

const paginationList = document.getElementById("pagination-list");

function renderPagination() {
  paginationList.innerHTML = ""; // Clear existing pagination

  if (totalPages <= 3) {
    // If pages are less than or equal to 5, display all
    for (let i = 1; i <= totalPages; i++) {
      appendPage(i);
    }
  } else {
    // Always show first page
    appendPage(1);

    if (currentPage > 2) {
      appendDots();
    }

    // Pages around the current page
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      appendPage(i);
    }

    if (currentPage < totalPages - 2) {
      appendDots();
    }

    // Always show last page
    appendPage(totalPages);
  }

  highlightActivePage();
}

function appendPage(pageNumber) {
  const li = document.createElement("li");
  li.textContent = pageNumber;
  li.classList.add("page-item");
  li.addEventListener("click", () => goToPage(pageNumber));
  paginationList.appendChild(li);
}

function appendDots() {
  const li = document.createElement("li");
  li.textContent = "...";
  li.classList.add("dots");
  paginationList.appendChild(li);
}

function highlightActivePage() {
  const pageItems = document.querySelectorAll(".page-item");
  pageItems.forEach((item) => {
    if (parseInt(item.textContent) === currentPage) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function goToPage(page) {
  currentPage = page;
  renderPagination();
  // Here, you can also add functionality to load content for the selected page.
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderPagination();
    // Load content for the previous page.
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    renderPagination();
    // Load content for the next page.
  }
}

// Initial render
renderPagination();
