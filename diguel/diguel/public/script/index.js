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

