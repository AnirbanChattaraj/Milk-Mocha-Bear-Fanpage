function createSparkles(event) {
  for (let i = 0; i < 25; i++) {  // number of bubbles
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // random size
    const size = Math.random() * 20 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // random position around click area
    bubble.style.left = `${event.clientX + (Math.random() * 200 - 100)}px`;
    bubble.style.top = `${event.clientY + (Math.random() * 200 - 100)}px`;

    // randomly choose Milk white or Mocha brown color
    const colors = ["#FFFFFF", "#A97458"]; // Milk white & Mocha brown
    bubble.style.background = colors[Math.floor(Math.random() * colors.length)];

    // add animation
    bubble.style.animation = "floatUp 1.3s ease-out forwards";

    document.body.appendChild(bubble);

    setTimeout(() => bubble.remove(), 1300);
  }
}
