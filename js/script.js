const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

const contactForm = document.getElementById("contact-form");
const visitorNameInput = document.getElementById("visitor-name");
const greetingMsg = document.getElementById("greeting-msg");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = visitorNameInput.value.trim();
    greetingMsg.textContent = "Hello, " + name + "! Thanks for visiting my profile.";
    contactForm.reset();
});