// Utility function to add event listeners
const addEventListener = (elements, event, callback) => {
  if (elements?.length) {
    elements.forEach((elem) => elem.addEventListener(event, callback));
  } else if (elements) {
    elements.addEventListener(event, callback);
  }
};

// Header and back-to-top button
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
let lastScrollPos = 0;

const updateHeaderState = () => {
  const isScrolled = window.scrollY > 150;
  header.classList.toggle("active", isScrolled);
  backTopBtn.classList.toggle("active", isScrolled);
  header.classList.toggle("header-hide", lastScrollPos < window.scrollY);
  lastScrollPos = window.scrollY;
};

addEventListener(window, "scroll", updateHeaderState);

// Scroll reveal effect
const sections = document.querySelectorAll("[data-section]");

const revealSections = () => {
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top < window.innerHeight / 2) {
      section.classList.add("active");
    }
  });
};

revealSections();
addEventListener(window, "scroll", revealSections);
