//animasi text start
const typed = new Typed(".text", {
  strings: ["Web Designer", "Front End Dev", "Graphic Designer"],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 500,
  loop: true,
  smartBackSpace: true,
});

//scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

const Bars = document.getElementById("bars");
const menu = document.getElementById("menu");
const navbar = document.querySelector(".header");
const navLinks = document.querySelectorAll(".menu li a");
const sections = document.querySelectorAll("section[id]");

Bars.addEventListener("click", () => {
  menu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("nav-bg");
  } else {
    navbar.classList.remove("nav-bg");
  }
  activeMenuOnScroll();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    menu.classList.remove("active");
  });
});

function activeMenuOnScroll() {
  const scrollY = window.pageYOffset;

  if (scrollY <= 200) {
    navLinks.forEach((link) => link.classList.remove("active"));
    document.querySelector('.menu li a[href*="#home"]')?.classList.add("active");
    return;
  }
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document.querySelector(`.menu li a[href="#${sectionId}"]`)?.classList.add("active");
    }
  });
}
console.log(window);
console.log(sections);
activeMenuOnScroll();

//portfolio tabs

const tabButton = document.querySelectorAll(".portfolio-tabs button");
tabButton.forEach((button) => {
  button.addEventListener("click", () => {
    tabButton.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

//portfolio filter

var mixer = mixitup(".portfolio-grid", {
  selectors: {
    target: ".portfolio-card",
  },
  animation: {
    duration: 500,
  },
});
