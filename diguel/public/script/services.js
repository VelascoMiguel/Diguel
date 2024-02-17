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
  "Mi objetivo principal, es empoderarte a vos, y a tu marca. Busco posicionarte como el mejor dentro de tu categoria, ofreciendo un producto o servicio con una calidad unica y distintiva, llevando tu nombre y conversión a otro nivel.",
  "En cada proyecto, busco un crecimiento conjunto. Más que simplemente proveer soluciones de desarrollo web, me comprometo a establecer relaciones sólidas y a cultivar un terreno fértil para el crecimiento mutuo. Cada logro de mis clientes es también mi éxito, y estoy dedicado a trabajar juntos para alcanzar metas ambiciosas y evolucionar en este camino hacia el progreso digital.",
  "La adaptabilidad es mi motor. En un mundo tecnológico en constante cambio, me enorgullezco de mi capacidad para adaptarme ágilmente a las nuevas tendencias, desafíos y demandas del mercado. Me comprometo a ser tu aliado flexible y receptivo, ajustándome a tus necesidades cambiantes y ofreciendo soluciones innovadoras y escalables que evolucionen con vos.",
  "Soy fiel creyente, que para obtener los resultados que queremos tanto para nuestros clientes como para nosotros, la pasión es un pilar clave. No hay resultados increibles sin pasión, es el punto de quiebre que nos permite sobrepasar dificultades y brindar los resultados que deseamos.",
];

let lastBox = null;
let lastSection = null;

function modifySection(boxOrSection, positionArrayText, numberBox, section) {
  boxOrSection.addEventListener("mouseenter", () => {
    if (lastBox != null && lastSection != null) {
      lastBox.style.backgroundColor = "#131313";
      changeBorder(lastSection);
    }
    section.style.borderBottom = "1px solid #f6632f";
    changeText(texts[positionArrayText]);
    let boxSearched = searchBox(numberBox);
    changeBackground(boxSearched);
    lastBox = boxSearched;
    lastSection = section;
  });
}

function changeText(texto) {
  textContentSection.textContent = texto;
}

function changeBorder(section) {
  section.style.borderBottom = "1px solid transparent";
}

function changeBackground(box) {
  box.style.backgroundColor = "#fb9c5c";
}

function searchBox(numberBox) {
  let box = null;
  switch (numberBox) {
    case 1:
      box = box1;
      break;
    case 2:
      box = box2;
      break;
    case 3:
      box = box3;
      break;
    case 4:
      box = box4;
      break;
    default:
      break;
  }
  return box;
}

modifySection(webDevelopment, 3, 4, webDevelopment);
modifySection(serverArchitecture, 2, 3, serverArchitecture);
modifySection(productDesign, 1, 2, productDesign);
modifySection(softwareDevelopment, 0, 1, softwareDevelopment);
modifySection(box4, 3, 4, webDevelopment);
modifySection(box3, 2, 3, serverArchitecture);
modifySection(box2, 1, 2, productDesign);
modifySection(box1, 0, 1, softwareDevelopment);
