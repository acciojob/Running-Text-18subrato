const textElement = document.getElementById("text");
const speedInput = document.getElementById("speed");
const text = "W";
let index = 0;
let interval = 500 / speedInput.value;

function renderText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(renderText, interval);
  }
}

speedInput.addEventListener("input", () => {
  index = 0;
  textElement.textContent = ""; // Clear the current text
  interval = 500 / speedInput.value; // Update the speed
  renderText(); // Restart rendering
});

renderText(); // Initial rendering