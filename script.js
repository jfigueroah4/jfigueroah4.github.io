window.onload = () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 5000);
};

const messages = ["Hola Yosiiiii, me voy a morir de verguenzaa", "Ahi lees todas las tarjetas o vas a ver"];
const bubble = document.getElementById("message-bubble");
let msgIndex = 0;
function showNextMessage() {
  bubble.style.opacity = 0;
  setTimeout(() => {
    bubble.textContent = messages[msgIndex];
    bubble.style.opacity = 1;
    msgIndex = (msgIndex + 1) % messages.length;
  }, 600);
}
setInterval(showNextMessage, 3000);
showNextMessage();

const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalComments = document.getElementById("modal-comments");
const closeBtn = document.querySelector(".close");

const commentsData = {
  "Agosto": ["🌹 Se me ocurre podemos hacer un mini picnic en el receso", "✨ Ver alguna pelicula si tenes libre un dia", "🎂 Quiero comprate un pastelito por tu cumple (ultra mega atrasado jaja)", "🎁 Darte un regalo pero bonito (tambien por tu cumple ultra atrasado)", "🏠 Salir a pasear o puedo llegar ahi a tu casita o llevarte luego de la u (te pido algo rico ahi)"],
  "Septiembre": ["🚗 Llevarte a un nose, a un mini parque de juegos o un arcade", "🎹 Tocarte unas canciones del piano", "🐶 Conozcas a los perritos", "🏀 Jugar un deporte, tipo basket jeje si perdes hay penitencia", "🎬 Ir a ver la pelicula esa de los demonios jeje"],
  "Octubre": ["📚 Estudiar para los examenes", "🛒 Ir de shopping jejej", "🎨 Hacer unas pinturas con acuarelas jeje", "🎃 Disfrazarnos pero bieeen asi un disfraz bonito", "🎮 Juguemos algo en el wii, tipo el mario"],
  "Noviembre": ["🍬 Quiero invitarte a una fiesta de un familiar", "🌼 Darte unas florecitas", "📖 Otra vez estudiar...", "🍕 Ir a comer algo cuando acaben todas las clases"],
  "Diciembre": ["🧁 Hacer unos cupcakes o galletas", "🍭 Invitarte a mi cumple :3", "🎄 Hacer un intercambio de regalitos de navidad", "🎊 Una despedida de fin de año"]
};

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.style.animation = "clickBounce 0.5s ease forwards";
    card.querySelector("h2").style.transform = "scale(1.1)";
    cards.forEach(c => { if(c !== card) c.style.opacity = 0; });

    const month = card.dataset.month;
    modalTitle.textContent = month;
    modalComments.innerHTML = "";
    commentsData[month].forEach((comment, i) => {
      const li = document.createElement("li");
      li.textContent = "• " + comment;
      li.style.animationDelay = `${i * 0.8}s`;
      modalComments.appendChild(li);
    });

    setTimeout(() => {
      modal.style.display = "flex";
      card.style.animation = "idleMove 4s ease-in-out infinite alternate";
      card.querySelector("h2").style.transform = "scale(1)";
    }, 500);
  });
});

closeBtn.addEventListener("click", () => {
  const cloud = document.querySelector(".cloud-modal");
  cloud.style.animation = "cloudOut 0.6s forwards";

  setTimeout(() => {
    modal.style.display = "none";
    cloud.style.animation = "cloudIn 0.8s ease forwards";
    cards.forEach(c => {
      c.style.opacity = 1;
      c.style.transform = "scale(1)";
      c.querySelector("h2").style.fontSize = "22px";
    });
  }, 600);
});


const floatingContainer = document.getElementById("floating-snoopys");
const snoopyImgs = ["amor.png","apenado.png","gracioso.png","llorando.png","mago.png","muerto.png","quieto.png","sonrojado.png"];
function spawnSnoopy() {
  const img = document.createElement("img");
  img.src = `./img/${snoopyImgs[Math.floor(Math.random() * snoopyImgs.length)]}`;
  img.style.left = Math.random() * window.innerWidth + "px";
  img.style.top = window.innerHeight + "px";
  img.style.animationDuration = (5 + Math.random()*5) + "s";
  floatingContainer.appendChild(img);
  setTimeout(() => floatingContainer.removeChild(img), 10000);
}
setInterval(spawnSnoopy, 2000);

const floatingMessagesContainer = document.getElementById("floating-messages");
const floatingTexts = ["Yoseeeliin love u", "ahi leees bien", "explote la mente aca", "Mmmm no que penita me dio ya", "jeje"];
function spawnFloatingMessage() {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("floating-message");
  msgDiv.textContent = floatingTexts[Math.floor(Math.random() * floatingTexts.length)];
  msgDiv.style.left = Math.random() * window.innerWidth + "px";
  msgDiv.style.top = window.innerHeight + "px";
  msgDiv.style.animationDuration = (5 + Math.random() * 5) + "s";
  floatingMessagesContainer.appendChild(msgDiv);
  setTimeout(() => floatingMessagesContainer.removeChild(msgDiv), 10000);
}
setInterval(spawnFloatingMessage, 2000);
