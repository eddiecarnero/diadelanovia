const noBtn = document.getElementById("no");
const siBtn = document.getElementById("si");
const mensajeFinal = document.getElementById("mensajeFinal");

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 200) - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

siBtn.addEventListener("click", () => {
  document.querySelector(".pregunta").innerHTML = `
    <h2>¡Sabía que me perdonarías! 🥹💞</h2>
    <p>Te amo muchísimo, gracias por seguir conmigo. 💖</p>
  `;
  mensajeFinal.classList.remove("oculto");
});

function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.style.left = `${Math.random() * 100}%`;
  corazon.style.animationDuration = `${5 + Math.random() * 5}s`;
  document.querySelector(".corazones-container").appendChild(corazon);

  setTimeout(() => corazon.remove(), 10000);
}

setInterval(crearCorazon, 500);
