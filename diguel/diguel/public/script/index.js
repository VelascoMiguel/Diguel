// const grid = document.querySelector(".grid");

// document.addEventListener("DOMContentLoaded", () => {
//   const cuadradoSize = 20; // Tamaño de cada cuadrado en píxeles
//   const gridWidth = grid.clientWidth;
//   const gridHeight = grid.clientHeight;

//   const cuadradosHorizontales = Math.floor(gridWidth / cuadradoSize);
//   const cuadradosVerticales = Math.floor(gridHeight / cuadradoSize);
//   const totalCuadrados = cuadradosHorizontales * cuadradosVerticales;

//   for (let index = 0; index < totalCuadrados; index++) {
//     const newBox = document.createElement("div");
//     newBox.classList.add("cuadrado");
//     grid.appendChild(newBox);
//   }

//   const allBoxes = document.querySelectorAll(".cuadrado");

//   allBoxes.forEach((box) => {
//     box.addEventListener("mouseenter", () => {
//       box.style.backgroundColor = "white";
//     });

//     box.addEventListener("mouseleave", () => {
//       box.style.backgroundColor = "transparent"; // Vuelve al color original (puede ser el color inicial definido en CSS)
//     });
//   });
// });

// const scrollCircle = document.querySelector('.scrollCircle');
// const circleOne = document.querySelector('.circleOne');
// const circleTwo = document.querySelector('.circleTwo');

// scrollCircle.addEventListener('mousemove', (e) => {
//   const x = e.clientX - scrollCircle.getBoundingClientRect().left;
//   const y = e.clientY - scrollCircle.getBoundingClientRect().top;

//   circleTwo.style.left = `${x}px`;
//   circleTwo.style.top = `${y}px`;

//   circleOne.style.left = `${x / 1.1}px`; // Ajusta la velocidad de seguimiento cambiando este valor
//   circleOne.style.top = `${y / 1.1}px`; // Ajusta la velocidad de seguimiento cambiando este valor
// });

const softwareDevelopment = document.getElementById("section1");
const productDesign = document.getElementById("section2");
const serverArchitecture = document.getElementById("section3");
const webDevelopment = document.getElementById("section4");

const box1 = document.getElementById("boxSection1");
const box2 = document.getElementById("boxSection2");
const box3 = document.getElementById("boxSection3");
const box4 = document.getElementById("boxSection4");

const textContentSection = document.getElementById("textContentSection");

const texts = [
  "We specialize in crafting bespoke software solutions that empower businesses by tackling their challenges head-on. Our team thrives on unraveling complexities, seeking innovative paths, and delivering tailored software that resolves your unique needs, fostering growth and efficiency.",
  "Our team of visionary designers crafts captivating interfaces, translating your ideas into stunning products. We blend creativity with functionality, ensuring user-centric designs that elevate your product, enhancing its appeal and usability.",
  "With seasoned experts, we navigate the intricate realm of server architecture, tackling communication challenges between businesses. From crafting complex server ecosystems to seamless API integrations, our proficiency ensures robust solutions and streamlined operations.",
  "Collaborating seamlessly with designers, we transform your web presence, ensuring an SEO-optimized platform. We tailor your site to fit your business needs, driving growth, enhancing visibility, and delivering a compelling user experience.",
];

let lastBox = null;
let lastSection = null;

softwareDevelopment.addEventListener("mouseenter", () => {
  if (lastBox != null && lastSection != null) {
    lastBox.style.backgroundColor = "#6d6d6d";
    changeBorder(lastSection);
  }
  softwareDevelopment.style.borderBottom = '1px solid #6d6d6d';
  changeText(texts[0]);
  changeBackground(box1);
  lastBox = box1;
  lastSection = softwareDevelopment;
});

productDesign.addEventListener("mouseenter", () => {
  if (lastBox != null && lastSection != null) {
    lastBox.style.backgroundColor = "#6d6d6d";
    changeBorder(lastSection);
  }
  productDesign.style.borderBottom = '1px solid #6d6d6d';
  changeText(texts[1]);
  changeBackground(box2);
  lastBox = box2;
  lastSection = productDesign;
});

serverArchitecture.addEventListener("mouseenter", () => {
  if (lastBox != null && lastSection != null) {
    lastBox.style.backgroundColor = "#6d6d6d";
    changeBorder(lastSection);
  }
  serverArchitecture.style.borderBottom = '1px solid #6d6d6d';
  changeText(texts[2]);
  changeBackground(box3);
  lastBox = box3;
  lastSection = serverArchitecture;
});

webDevelopment.addEventListener("mouseenter", () => {
  if (lastBox != null && lastSection != null) {
    lastBox.style.backgroundColor = "#6d6d6d";
    changeBorder(lastSection);
  }
  webDevelopment.style.borderBottom = '1px solid #6d6d6d';
  changeText(texts[3]);
  changeBackground(box4);
  lastBox = box4;
  lastSection = webDevelopment;
});

function changeText(texto) {
  textContentSection.textContent = texto;
}

function changeBorder(section) {
  section.style.borderBottom = "1px solid transparent";
}

function changeBackground(box) {
  box.style.backgroundColor = "#fff";
}
