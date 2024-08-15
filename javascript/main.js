
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('click', () => {
    project.style.backgroundColor = '#f0f0f0';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#menuheader .nav-link");

  window.addEventListener("scroll", function() {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);
      const targetOffsetTop = targetSection.offsetTop;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });
});

const switchInput = document.getElementById('modo-switch');
const icon = document.getElementById('icon');
const body = document.body;
const section = document.getElementsByTagName('section');
const parrafos = document.getElementsByTagName('p');
const cards = document.getElementsByClassName('card');
const cardsudemy = document.getElementsByClassName('card-udemy');
const pinks = document.getElementsByClassName('pink');
const transparente = document.getElementsByClassName('transparente');
const greens = document.getElementsByClassName('green');
const header = document.getElementsByClassName('main-header');
const button = document.getElementsByClassName('button');
const button2 = document.getElementsByClassName('button2');
const navlink = document.getElementsByClassName('nav-link');

let modoNoche = false;

switchInput.addEventListener('click', function() {
  modoNoche = !modoNoche;
  
  if (modoNoche) {
    // Cambiar a modo noche
    icon.textContent = '☀️'; // Cambia icono a sol
    body.classList.add('modo-dia-body');
    for (let i = 0; i < section.length; i++) {
      section[i].classList.add('modo-dia');
    }
    for (let i = 0; i < parrafos.length; i++) {
      parrafos[i].classList.add('modo-dia');
    }
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add('modo-dia-card');
    }
    for (let i = 0; i < cardsudemy.length; i++) {
      cardsudemy[i].classList.add('modo-dia-card');
    }
    for (let i = 0; i < pinks.length; i++) {
      pinks[i].classList.add('modo-dia-pink');
    }
    for (let i = 0; i < greens.length; i++) {
      greens[i].classList.add('modo-dia-green');
    }
    for (let i = 0; i < transparente.length; i++) {
      transparente[i].classList.add('modo-dia-transparente');
    }
    for (let i = 0; i < header.length; i++) {
      header[i].classList.add('modo-dia-header');
    }
    for (let i = 0; i < navlink.length; i++) {
      navlink[i].classList.add('modo-dia-navlink');
    }
    for (let i = 0; i < button.length; i++) {
      button[i].classList.add('modo-dia-button');
    }
    for (let i = 0; i < button2.length; i++) {
      button2[i].classList.add('modo-dia-button2');
    }
  } else {
    // Cambiar a modo día
    icon.textContent = '🌑'; // Cambia icono a luna
    body.classList.remove('modo-dia-body');
    for (let i = 0; i < section.length; i++) {
      section[i].classList.remove('modo-dia');
    }
    for (let i = 0; i < parrafos.length; i++) {
      parrafos[i].classList.remove('modo-dia');
    }
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove('modo-dia-card');
    }
    for (let i = 0; i < cardsudemy.length; i++) {
      cardsudemy[i].classList.remove('modo-dia-card');
    }
    for (let i = 0; i < pinks.length; i++) {
      pinks[i].classList.remove('modo-dia-pink');
    }
    for (let i = 0; i < greens.length; i++) {
      greens[i].classList.remove('modo-dia-green');
    }
    for (let i = 0; i < transparente.length; i++) {
      transparente[i].classList.remove('modo-dia-transparente');
    }
    for (let i = 0; i < header.length; i++) {
      header[i].classList.remove('modo-dia-header');
    }
    for (let i = 0; i < navlink.length; i++) {
      navlink[i].classList.remove('modo-dia-navlink');
    }
    for (let i = 0; i < button.length; i++) {
      button[i].classList.remove('modo-dia-button');
    }
    for (let i = 0; i < button2.length; i++) {
      button2[i].classList.remove('modo-dia-button2');
    }
  }
});


const backend = document.getElementById('backend');
const aprendiendo = document.getElementById('aprendiendo');
const herramientas = document.getElementById('herramientas');
const frontend = document.getElementById('frontend');

const heightfront = frontend.clientHeight;
const widthfront = frontend.clientWidth;

frontend.addEventListener('mousemove', (evt) => {
  const { layerX, layerY } = evt;
  const yRotation = ((layerX - widthfront / 2) / widthfront) * 18;
  const xRotation = ((layerY - heightfront / 2) / heightfront) * -18;

  const string = `
  perspective(500px)
  scale(1)
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)`

  frontend.style.transform = string;
  frontend.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
});

frontend.addEventListener('mouseout', () => {
  frontend.style.transform = `
  perspective(500px)
  scale(1)
  rotateX(0)
  rotateY(0)`;
  frontend.style.boxShadow = "none";
});

const heightback = backend.clientHeight;
const widthback = backend.clientWidth;

backend.addEventListener('mousemove', (evt) => {
  const { layerX, layerY } = evt;
  const yRotation = ((layerX - widthback / 2) / widthback) * 18;
  const xRotation = ((layerY - heightback / 2) / heightback) * -18;

  const string = `
  perspective(500px)
  scale(1)
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)`

  backend.style.transform = string;
  backend.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
});

backend.addEventListener('mouseout', () => {
  backend.style.transform = `
  perspective(500px)
  scale(1)
  rotateX(0)
  rotateY(0)`;
  backend.style.boxShadow = "none";
});

const heightaprendiendo = aprendiendo.clientHeight;
const widthaprendiendo = aprendiendo.clientWidth;

aprendiendo.addEventListener('mousemove', (evt) => {
  const { layerX, layerY } = evt;
  const yRotation = ((layerX - widthaprendiendo / 2) / widthaprendiendo) * 18;
  const xRotation = ((layerY - heightaprendiendo / 2) / heightaprendiendo) * -18;

  const string = `
  perspective(500px)
  scale(1)
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)`

  aprendiendo.style.transform = string;
  aprendiendo.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
});

aprendiendo.addEventListener('mouseout', () => {
  aprendiendo.style.transform = `
  perspective(500px)
  scale(1)
  rotateX(0)
  rotateY(0)`;
  aprendiendo.style.boxShadow = "none";
});

document.addEventListener('DOMContentLoaded', function() {
  const text = "Hola, soy Nico";
  let index = 0;
  const speed = 150; // Velocidad de escritura en milisegundos

  function type() {
    if (index < text.length) {
      document.querySelector('.typed-text').textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  setTimeout(type, 1000); // Espera 1 segundo antes de comenzar la animación
});

const heightherramientas = herramientas.clientHeight;
const widthherramientas = herramientas.clientWidth;

herramientas.addEventListener('mousemove', (evt) => {
  const { layerX, layerY } = evt;
  const yRotation = ((layerX - widthherramientas / 2) / widthherramientas) * 18;
  const xRotation = ((layerY - heightherramientas / 2) / heightherramientas) * -18;

  const string = `
  perspective(500px)
  scale(1)
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)`

  herramientas.style.transform = string;
  herramientas.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
});

herramientas.addEventListener('mouseout', () => {
  herramientas.style.transform = `
  perspective(500px)
  scale(1)
  rotateX(0)
  rotateY(0)`;
  herramientas.style.boxShadow = "none";
});
var downloadButtons = document.querySelectorAll(".download-button");

downloadButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var pdfUrl = "../pdfs/nicolasmunozcv.pdf";

    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {

        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "nicolasmunozcv.pdf"; 

        link.click();

        window.URL.revokeObjectURL(link.href);
      })
      .catch(error => console.error("Error al descargar el archivo:", error));
  });
});

// Otras funcionalidades que desees agregar
