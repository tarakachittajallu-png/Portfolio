const roles = [
  "Creative Designer",
  "Video Editor",
  "Frontend Developer",
  "Motion Graphics Designer",
  "Social Media Designer",
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function type() {
  currentRole = roles[roleIndex];

  if (!isDeleting) {
    document.getElementById("typing").textContent = currentRole.substring(
      0,
      charIndex++,
    );

    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    document.getElementById("typing").textContent = currentRole.substring(
      0,
      charIndex--,
    );

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
// =====================
// Project Filter
// =====================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach((card) => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
