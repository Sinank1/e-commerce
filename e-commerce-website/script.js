const reviews = document.querySelector(".reviews");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateReviewsPosition();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < reviews.children.length - getVisibleCount()) {
    currentIndex++;
    updateReviewsPosition();
  }
});

function getVisibleCount() {
  const reviewContainerWidth =
    document.querySelector(".review-container").offsetWidth;
  const reviewWidth = reviews.children[0].offsetWidth + 20; // margin dahil
  return Math.floor(reviewContainerWidth / reviewWidth);
}

function updateReviewsPosition() {
  const reviewWidth = reviews.children[0].offsetWidth + 20; // margin dahil
  reviews.style.transform = `translateX(-${currentIndex * reviewWidth}px)`;
}

window.addEventListener("resize", () => {
  currentIndex = 0;
  reviews.style.transform = "translateX(0)";
});
