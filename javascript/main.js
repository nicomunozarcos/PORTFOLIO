
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('click', () => {
    project.style.backgroundColor = '#f0f0f0';
  });
});

/* particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
}); */

function getParticlesConfig(color = "#ffffff", lineColor = "#ffffff") {
  return {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: color },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: lineColor,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  };
}

function iniciarParticles(modo) {
  const color = modo === "dia" ? "#000000" : "#ffffff";
  const lineColor = modo === "dia" ? "#000000" : "#ffffff";

  // Destruir el canvas anterior si existe (opcional, si no se limpia bien)
  if (window.pJSDom && window.pJSDom.length) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
  }

  particlesJS("particles-js", getParticlesConfig(color, lineColor));
}


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

  iniciarParticles("noche");
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
const btntelmi = document.getElementsByClassName('btn-telmi');
const btnsuccess = document.getElementsByClassName('btn-success');
const botondescarga = document.getElementsByClassName('buttondescarga');
const button2 = document.getElementsByClassName('button2');
const navlink = document.getElementsByClassName('nav-link');

let modoNoche = false;

switchInput.addEventListener('click', function() {
  modoNoche = !modoNoche;
  
  if (modoNoche) {
    iniciarParticles("dia");
    // Cambiar a modo noche
    icon.innerHTML = `<svg class="iconoday" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                      </svg>`;
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
    for (let i = 0; i < btntelmi.length; i++) {
      btntelmi[i].classList.add('btn-telmi-dia');
    }
    for (let i = 0; i < btnsuccess.length; i++) {
      btnsuccess[i].classList.add('btn-success-dia');
    }
    for (let i = 0; i < botondescarga.length; i++) {
      botondescarga[i].classList.add('buttondescarga-dia');
    }
    document.getElementById('particles-js').style.backgroundColor = '#ffffff';
  } else {
    iniciarParticles("noche");
    // Cambiar a modo día
    icon.innerHTML = `<svg class="iconodark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
                        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                      </svg>`; // Cambia icono a luna
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
    for (let i = 0; i < btntelmi.length; i++) {
      btntelmi[i].classList.remove('btn-telmi-dia');
    }
    for (let i = 0; i < btnsuccess.length; i++) {
      btnsuccess[i].classList.remove('btn-success-dia');
    }
    for (let i = 0; i < botondescarga.length; i++) {
      botondescarga[i].classList.remove('buttondescarga-dia');
    }
    document.getElementById('particles-js').style.backgroundColor = '#000000';
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

/*
// Selecciona el div que quieres ocultar/mostrar
const scrollDiv = document.getElementById('scrollDiv');

// Variable para almacenar la posición del scroll anterior
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    // Obtiene la posición actual del scroll
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Cuando se hace scroll hacia abajo, agrega la clase 'hidden' para ocultar el div hacia abajo
        scrollDiv.classList.add('hidden');
    } else {
        // Cuando se hace scroll hacia arriba, remueve la clase 'hidden' para mostrar el div
        scrollDiv.classList.remove('hidden');
    }

    // Actualiza la posición del scroll anterior con la actual
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});*/
