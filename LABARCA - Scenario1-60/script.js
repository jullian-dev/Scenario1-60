// Smooth letter-by-letter fade-in
function changeText() {
  const text = document.getElementById("hero-text");
  const sentence = "Jullian Frenz Labarca / BSIT-1F";
  text.innerHTML = "";

  for (let i = 0; i < sentence.length; i++) {
    const span = document.createElement("span");
    const char = sentence[i] === " " ? "\u00A0" : sentence[i];
    span.textContent = char;
    span.style.animationDelay = `${i * 0.05}s`;
    text.appendChild(span);
  }
}

// Toggle between light and dark mode
function toggleMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
}

// Initialize fade-in text on load
window.onload = () => {
  changeText();
};
