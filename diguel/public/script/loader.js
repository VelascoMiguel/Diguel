const nameCompany = document.getElementById("nameCompany");
const text = document.getElementById("nameCompany").textContent;
const chars = text.split("");

const styledText = chars
  .map((char, index) => `<span class="char-${index}">${char}</span>`)
  .join("");

console.log(styledText);

nameCompany.innerHTML = styledText;

const cols = document.querySelectorAll(".col");
const loaderCont = document.querySelector(".loader");

const primerCharCol1 = document.querySelector(".char-0");
const segundoCharCol1 = document.querySelector(".char-1");

const primerCharCol2 = document.querySelector(".char-2");
const segundoCharCol2 = document.querySelector(".char-3");

const primerCharCol3 = document.querySelector(".char-4");
const segundoCharCol3 = document.querySelector(".char-5");

const primerCharCol4 = document.querySelector(".char-6");

function loader() {
  let totalDuration = 0;
  nameCompany.style.color = "#000";

  cols.forEach((col, index) => {
    const duration = index * 200;
    totalDuration = duration;

    switch (index) {
      case 0:
        setTimeout(() => {
          col.style.height = "0";
        }, duration);
        break;
      case 1:
        setTimeout(() => {
          col.style.height = "0";
          primerCharCol1.style.color = "#fff";
          segundoCharCol1.style.color = "#fff";
        }, duration);
        break;
      case 2:
        setTimeout(() => {
          col.style.height = "0";
          primerCharCol2.style.color = "#fff";
          segundoCharCol2.style.color = "#fff";
        }, duration);
        break;
      case 3:
        setTimeout(() => {
          col.style.height = "0";
          primerCharCol3.style.color = "#fff";
          segundoCharCol3.style.color = "#fff";
        }, duration);
        break;
      case 4:
        setTimeout(() => {
          col.style.height = "0";
          primerCharCol4.style.color = "#fff";
        }, duration);
        break;

      default:
        break;
    }
  });

  setTimeout(() => {
    nameCompany.style.color = "#fff";
    loaderCont.style.display = "none";
  }, totalDuration + 400); // Agrega un tiempo adicional para asegurarte de que termine la animación
}

loader();
