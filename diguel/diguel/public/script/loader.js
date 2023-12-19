// const cols = document.querySelectorAll(".col");

// cols.forEach((col, index) => {
//   setTimeout(() => {
//     col.style.height = "0";
//   }, index * 100); // Ajusta el tiempo aquí (en milisegundos)
// });


const cols = document.querySelectorAll(".col");
const loaderCont = document.querySelector(".loader");

function loader() {
  let totalDuration = 0;

  cols.forEach((col, index) => {
    const duration = index * 200;
    totalDuration = duration;

    setTimeout(() => {
      col.style.height = "0";
    }, duration);
  });

  setTimeout(() => {
    loaderCont.style.display = "none";
  }, totalDuration + 1000); // Agrega un tiempo adicional para asegurarte de que termine la animación
}

loader();