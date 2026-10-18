
"use strict";

// Dark Mode
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }
});

// Switching Sections
const sectionButtons = document.querySelectorAll(".section-btn");
const sections = document.querySelectorAll(".portfolio-section");

sectionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedSection = button.dataset.section;

    sections.forEach(function (section) {
      section.hidden = section.id !== selectedSection;
    });

    sectionButtons.forEach(function (item) {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
  });
});

// Project Details
const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const detailsId = button.getAttribute("aria-controls");
    const details = document.getElementById(detailsId);

    if (details.hidden) {
      details.hidden = false;
      button.textContent = "Hide Details";
      button.setAttribute("aria-expanded", "true");
    } else {
      details.hidden = true;
      button.textContent = "View Details";
      button.setAttribute("aria-expanded", "false");
    }
  });
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  formFeedback.className = "";

  if (name === "" || email === "" || message === "") {
    formFeedback.textContent = "Please fill in all fields.";
    formFeedback.className = "error";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    formFeedback.textContent = "Please enter a valid email address.";
    formFeedback.className = "error";
    return;
  }

  formFeedback.textContent =
    "Your email is ready. Please send it from your email application.";
  formFeedback.className = "success";

  const subject = encodeURIComponent("Portfolio Contact from " + name);
  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\n\nMessage:\n" + message
  );

  const emailLink =
    "mailto:joudazizalqarni@gmail.com?subject=" +
    subject + "&body=" + body;

  window.location.href = emailLink;
});
