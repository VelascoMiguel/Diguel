const scrollCircle = document.querySelector(".scrollCircle");
const circleOne = document.querySelector(".circleOne");
const circleTwo = document.querySelector(".circleTwo");

scrollCircle.addEventListener("mousemove", (e) => {
  const x = e.clientX - scrollCircle.getBoundingClientRect().left;
  const y = e.clientY - scrollCircle.getBoundingClientRect().top;

  circleTwo.style.left = `${x}px`;
  circleTwo.style.top = `${y}px`;

  circleOne.style.left = `${x / 1.1}px`; // Ajusta la velocidad de seguimiento cambiando este valor
  circleOne.style.top = `${y / 1.1}px`; // Ajusta la velocidad de seguimiento cambiando este valor
});

scrollCircle.addEventListener("mouseleave", () => {
  // Pendiente
});