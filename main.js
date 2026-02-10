const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Form demo message
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "Kiitos! Viestisi on lähetetty (demo).";
  form.reset();
});
