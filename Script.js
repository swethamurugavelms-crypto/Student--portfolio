/* Mobile Navigation */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isExpanded);
});

/* Close Navigation After Clicking a Link */
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

/* Contact Form Validation */
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    status.className = "";

    if (name === "" || email === "" || message === "") {
        status.textContent = "Please fill in all fields.";
        status.classList.add("error");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        status.textContent = "Please enter a valid email address.";
        status.classList.add("error");
        return;
    }

    status.textContent =
        "Your form has been validated successfully!";
    status.classList.add("success");

    form.reset();
});
