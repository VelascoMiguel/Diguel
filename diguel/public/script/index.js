const menuHamburguer = document.querySelector('.menuHamburguer');
const contentHamburguer = document.querySelector('.contentHamburguer');

let isOpen = false;

menuHamburguer.addEventListener('click', () => {
  if (!isOpen) {
    contentHamburguer.style.height = '600px'; // Sube progresivamente hasta 600
  } else {
    contentHamburguer.style.height = '0'; // Baja lento de 600 a 0
  }
  
  isOpen = !isOpen; // Invierte el estado del menú
});
