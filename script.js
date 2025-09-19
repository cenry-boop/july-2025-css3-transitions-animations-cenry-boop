// ===== Part 2: Functions, Scope, Parameters & Return =====

// Global variable
let animationCount = 0;

// Function with parameters & return
function calculateArea(width, height) {
  return width * height;
}
console.log("Area of 10x5 box:", calculateArea(10, 5));

// Scope demonstration
function increaseCounter() {
  let localCount = 1; // local scope
  animationCount++;   // global scope
  return animationCount + localCount;
}
console.log("Counter result:", increaseCounter());

// ===== Part 3: Combining CSS + JavaScript =====

// Reusable function to trigger CSS animation
function triggerAnimation(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.remove(className); // reset if already applied

  // Force reflow so animation can restart
  void element.offsetWidth;

  element.classList.add(className);
  return "Animation triggered!";
}s

// Button to animate box
document.getElementById("animateBtn").addEventListener("click", () => {
  console.log(triggerAnimation("myBox", "animate"));
});

// ===== Modal with CSS + JS =====
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  modal.classList.add("show");
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modal.classList.remove("show");
});

// Close modal if clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
});
