let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll("header .navbar a");
let header = document.querySelector("header");
let sections = document.querySelectorAll("section");

// Toggle menu on icon click
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  let top = window.scrollY;

  // Remove active class from all navLinks
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Check which section is currently in view
  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      let activeLink = document.querySelector(`header .navbar a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });

  // Sticky header
  header.classList.toggle("sticky", top > 100);

  // Hide menu when scrolling away from home section
  if (top > 0) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
};

// Scroll Reveal Animation
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

// Typed.js Animation
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Designer", "Students", "Quýt🍊"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});

// Mở modal và hiển thị form login
function openModal() {
  document.getElementById("loginModal").style.display = "flex";
  showLoginForm(); // Hiển thị form login mặc định
}

// Đóng modal
function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

// Hiển thị form login
function showLoginForm() {
  document.getElementById("loginForm").classList.add("active");
  document.getElementById("registerForm").classList.remove("active");
}

// Hiển thị form register
function showRegisterForm() {
  document.getElementById("registerForm").classList.add("active");
  document.getElementById("loginForm").classList.remove("active");
}

// Chuyển đổi giữa các form
function switchToRegister() {
  showRegisterForm();
}

function switchToLogin() {
  showLoginForm();
}

// Đóng modal khi nhấn ra ngoài nội dung modal
window.onclick = function(event) {
  if (event.target == document.getElementById("loginModal")) {
    closeModal();
  }
};

const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});