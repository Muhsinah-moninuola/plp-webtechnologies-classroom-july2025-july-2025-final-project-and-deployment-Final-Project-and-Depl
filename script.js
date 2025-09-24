/* =========================
   HealMate - Script.js
   Handles:
   1. Random reminder modal (Home Page)
   2. Medication demo form (Features Page)
   3. Contact form validation (Contact Page)
========================= */


// =====================
// 1. Positive Reminders Modal
// =====================
const reminders = [
  "You're doing better than you think 💡",
  "Take a deep breath and keep going 🌱",
  "Every step forward counts 🚀",
  "Believe in your journey ✨",
  "One day at a time. You’ve got this 💛"
];

const reminderBtn = document.getElementById("reminderBtn");
const reminderModal = document.getElementById("reminderModal");
const reminderText = document.getElementById("reminderText");
const closeModal = document.getElementById("closeModal");

if (reminderBtn && reminderModal && reminderText && closeModal) {
  // Show modal with random reminder when button is clicked
  reminderBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * reminders.length);
    reminderText.textContent = reminders[randomIndex];
    reminderModal.style.display = "block";
  });

  // Close modal when user clicks the "x"
  closeModal.addEventListener("click", () => {
    reminderModal.style.display = "none";
  });

  // Close modal if user clicks outside modal content
  window.addEventListener("click", (event) => {
    if (event.target === reminderModal) {
      reminderModal.style.display = "none";
    }
  });
}


// =====================
// 2. Medication Reminder Demo (Features Page)
// =====================
const medForm = document.getElementById("medForm");
const medLog = document.getElementById("medLog");

if (medForm && medLog) {
  medForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const medName = document.getElementById("medName").value.trim();
    const medTime = document.getElementById("medTime").value;

    if (medName && medTime) {
      // Create a new list item
      const li = document.createElement("li");
      li.textContent = `⏰ Reminder set for ${medTime}: Take ${medName}`;
      medLog.appendChild(li);

      // Alert to simulate "reminder set"
      alert(`Reminder set for ${medTime}: Take ${medName}`);

      // Reset form
      medForm.reset();
    }
  });
}


// =====================
// 3. Contact Form Validation (Contact Page)
// =====================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (name && email.includes("@") && message) {
      alert("✅ Thank you for reaching out! We'll get back to you soon.");
      contactForm.reset();
    } else {
      alert("⚠️ Please fill in all fields with valid information.");
    }
  });
}
