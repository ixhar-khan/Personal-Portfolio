const statusDot = document.querySelector("#dot");
const theme_btn = document.querySelector(".theme-btn");
const body = document.querySelector("#body");
const moon = document.querySelector("#moon");
const star = document.querySelector("#star");
let count = 0;
const theme = window.localStorage.getItem("Theme");
const filterItems = document.querySelectorAll(
  ".portfolio-categories .filter-btn"
);
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const images = document.querySelectorAll(".gallery-item img");
const project = document.querySelectorAll(".project");
const plusIcons = document.querySelectorAll(".plus-icon");

// Lenis Js Code
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Online Status code
function updateOnlineStatus() {
  if (navigator.onLine) {
    statusDot.classList.remove("offline");
    statusDot.classList.add("Online");
  } else {
    statusDot.classList.remove("Online");
    statusDot.classList.add("offline");
  }
}

updateOnlineStatus();

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

// Dark Theme Code
if (theme == "Dark") {
  moon.style.display = "none";
  star.style.display = "block";
  body.classList.add("dark-var");
}

theme_btn.addEventListener("click", function () {
  if (count === 0) {
    star.style.display = "block";
    moon.style.display = "none";
    body.classList.add("dark-var");
    window.localStorage.setItem("Theme", "Dark");
    count = 1;
  } else {
    star.style.display = "none";
    moon.style.display = "block";
    body.classList.remove("dark-var");
    window.localStorage.setItem("Theme", "Light");
    count = 0;
  }
});

// swiper js code
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// protfolio
filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    filterItems.forEach((li) => li.classList.remove("active"));
    item.classList.add("active");

    const filterValue = item.getAttribute("data-filter");

    galleryItems.forEach((galleryItem) => {
      if (
        filterValue === "all" ||
        galleryItem.getAttribute("data-category") === filterValue
      ) {
        galleryItem.classList.remove("hide");
        galleryItem.classList.add("show");
      } else {
        galleryItem.classList.add("hide");
        galleryItem.classList.remove("show");
      }
    });
  });
});

plusIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const parentProject = this.closest(".project");

    const projectImage = parentProject.querySelector("img");

    lightbox.classList.add("active");
    lightboxImg.src = projectImage.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove("active");
  }
});
