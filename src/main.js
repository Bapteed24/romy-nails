import "./style.css";

console.log("Site chargé");

/* =========================
   HEADER SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header?.classList.add("scrolled");
  } else {
    header?.classList.remove("scrolled");
  }
});

/* =========================
   FAQ
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question?.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

/* =========================
   BURGER MENU
========================= */

const burgerBtn = document.querySelector(".burger-btn");
const nav = document.querySelector(".nav");

burgerBtn?.addEventListener("click", () => {
  nav?.classList.toggle("active");
  burgerBtn.classList.toggle("active");
});