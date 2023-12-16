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

function modifySection(boxOrSection, positionArrayText, numberBox, section) {
  boxOrSection.addEventListener("mouseenter", () => {
    if (lastBox != null && lastSection != null) {
      lastBox.style.backgroundColor = "#131313";
      changeBorder(lastSection);
    }
    section.style.borderBottom = "1px solid #6d6d6d";
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
  box.style.backgroundColor = "#fff";
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


const languageButton = document.getElementById("languageButton");

languageButton.addEventListener("click", () => {
  if (languageButton.classList.contains("es")) {
    languageButton.classList.remove("es");
    languageButton.classList.add("en");
    languageButton.textContent = "ES";
  } else if (languageButton.classList.contains("en")) {
    languageButton.classList.remove("en");
    languageButton.classList.add("es");
    languageButton.textContent = "EN";
  }
});

function cambiarIdiomaIngles() {

}

function cambiarIdiomaEspañol() {
  
}
