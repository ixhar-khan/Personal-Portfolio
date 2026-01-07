const statusDot = document.querySelector("#dot");
const theme_btn = document.querySelector(".theme-btn");
const body = document.querySelector("#body");
const moon = document.querySelector("#moon");
const star = document.querySelector("#star");
let count = 0;
const theme = window.localStorage.getItem("Theme");

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
if (theme == "Dark") body.classList.add("dark-var");

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
