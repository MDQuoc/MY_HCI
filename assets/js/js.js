let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll("header .navbar a");

// Toggle menu on icon click
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Close menu on link click
navLinks.forEach((link) => {
  link.onclick = () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
});

let sections = document.querySelectorAll("section");

window.onscroll = () => {
  let top = window.scrollY;

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      let activeLink = document.querySelector(
        `header .navbar a[href="#${id}"]`
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });

  // Sticky header
  header.classList.toggle("sticky", window.scrollY > 100);
};
document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });
  ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
  ScrollReveal().reveal(".home-img, .lab-box, .contact form", {
    origin: "bottom",
  });
  ScrollReveal().reveal(".home-content h1", { origin: "left" });
  ScrollReveal().reveal(".home-content p", { origin: "right" });
});

document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Designer", "Students","Quýt🍊"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});
