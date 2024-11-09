// --- VARIABLES
const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// --- QUERY SELECTORS
const ctaButtons = document.querySelectorAll(".cta-btn");
const bookContent = document.getElementById("main-book-content");
const date = document.getElementById("date");
const month = document.getElementById("month");
const day = document.getElementById("day");
// ---- RENDERS
// ---- ANIMATE
// ---- EVENT LISTENERS
ctaButtons.forEach((each) => {
  each.addEventListener("click", () => {
    bookContent.classList.toggle("active");
  });
});

const today = new Date();
date.innerText = today.getDate();
month.innerText = MONTHS[today.getMonth()];
day.innerText = DAY[today.getDay()];
// --- EXECUTES
