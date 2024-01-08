// Selecciona todos los contenedores '.service'
const serviceContainers = document.querySelectorAll('.service');

// Itera sobre cada contenedor y agrega un evento de clic a su ícono '<i>'
serviceContainers.forEach(container => {
  const icon = container.querySelector('.fa-plus'); // Selecciona el ícono dentro del contenedor

  icon.addEventListener('click', () => {
    const infoInvisible = container.querySelector('.infoServiceInvisible'); // Selecciona el div '.infoServiceInvisible' dentro del mismo contenedor

    // Cambia el estilo de 'display' del div '.infoServiceInvisible'
    if (infoInvisible.style.display === 'none' || infoInvisible.style.display === '') {
      infoInvisible.style.display = 'block';
    } else {
      infoInvisible.style.display = 'none';
    }
  });
});


