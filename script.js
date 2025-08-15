const titleElement = document.getElementById('title');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const catImage = document.getElementById('cat-image');

const proposals = [
    "2. ",
    "2. Bueno, podemos ir a comer igual a uno de esos lugar, lo mismo te llego a traer o a dejar",
    "3. AHH TE HACES LA DIFICL, va podemos ir a comer e ir al cine ",
    "4. MMM si no queres salir de tu casa, puedo llegar, pedimos comida vemos algo y jugamos quiza si no molesto",
    "5. JAJA eh si llegate aca. ¿Quieres venir a mi casa?, Tengo un wii podemos jugar ahi, ir a jugar basket, pedir comida o ver algo. Entonces te llego a traer y a dejar si te parece ",
    "6. Propone algo tu >:("
];

let currentProposal = 0;

const catImages = [
    './img/cat-1.jpg',
    './img/cat-2.jpg',
    './img/cat-3.jpg',
    './img/cat-4.jpg',
    './img/cat-5.jpg',
    './img/cat-yes.jpg',
    './img/cat-0.jpg'
];

btnYes.addEventListener('click', () => {
    titleElement.innerHTML = "Yayyy!! :3";
    catImage.src = './img/cat-yes.jpg';
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
});

btnNo.addEventListener('click', () => {
    currentProposal = (currentProposal + 1) % proposals.length;
    titleElement.textContent = proposals[currentProposal];
    catImage.src = catImages[currentProposal];
});