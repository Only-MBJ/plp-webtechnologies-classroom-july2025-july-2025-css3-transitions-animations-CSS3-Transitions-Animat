// ====================== PART 2: FUNCTIONS, PARAMETERS, SCOPE, RETURN VALUES ======================
let globalCount = 0;

// Function with parameters and return value
function multiply(a, b) {
  return a * b;
}

// Function showing local vs global scope
function incrementCount() {
  let localCount = 10; // local variable
  globalCount++;
  console.log("Local Count:", localCount);
  console.log("Global Count:", globalCount);
}

// Run examples
function runExamples() {
  console.clear();
  console.log("=== Function Examples ===");
  console.log("Multiply(4, 5) =", multiply(4, 5));
  incrementCount();
  incrementCount();
  console.log("Return Value Example:", multiply(8, 3));
  console.log("✔ Functions executed successfully!");
}

// ====================== PART 3: COMBINING CSS & JS ANIMATIONS ======================
const box = document.getElementById("box");
const button = document.getElementById("animateBtn");

if (button && box) {
  button.addEventListener("click", () => {
    box.classList.toggle("animate");
    console.log("Animation toggled!");
  });
}

// ====================== PART 1 NOTE ======================
console.log("✅ Part 1 animations run automatically using CSS transitions & keyframes.");
