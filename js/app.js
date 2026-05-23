// NAVBAR ANIMADA
// SELECCIONAMOS EL NAVBAR
const navbar = document.querySelector(".navbar");

// DETECTAMOS EL SCROLL
window.addEventListener("scroll", () => {

  // SI EL USUARIO BAJA MÁS DE 50PX
  if(window.scrollY > 50){

    // AGREGA LA CLASE "scrolled"
    navbar.classList.add("scrolled");
  }

  // SI REGRESA ARRIBA
  else{

    // ELIMINA LA CLASE
    navbar.classList.remove("scrolled");
  }

});

// SLIDER
const slides = document.querySelectorAll(".slide");

// BOTONES
const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

// ÍNDICE
let currentSlide = 0;

// MOSTRAR SLIDE
function showSlide(index){

  slides.forEach(slide => {

    slide.classList.remove("active");

  });

  slides[index].classList.add("active");
}

// SIGUIENTE
function nextSlide(){

  currentSlide++;

  if(currentSlide >= slides.length){

    currentSlide = 0;
  }

  showSlide(currentSlide);
}

// ANTERIOR
function prevSlide(){

  currentSlide--;

  if(currentSlide < 0){

    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

// EVENTOS
nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);

// AUTO SLIDER
setInterval(nextSlide, 5000);

// CONTADOR ANIMADO AL HACER SCROLL
// SELECCIONAMOS CONTADORES
const counters = document.querySelectorAll(".counter");

// VARIABLE PARA EVITAR REPETICIÓN
let started = false;

// FUNCIÓN CONTADOR
function startCounters(){

  counters.forEach(counter => {

    counter.innerText = "0";

    const target = +counter.getAttribute("data-target");

    const increment = target / 120;

    function updateCounter(){

      const current = +counter.innerText;

      if(current < target){

        counter.innerText = `${Math.ceil(current + increment)}`;

        setTimeout(updateCounter, 15);
      }

      else{

        counter.innerText = `${target}+`;
      }
    }

    updateCounter();
  });
}

// OBSERVER
const statsSection = document.querySelector(".stats-section");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    // SI LA SECCIÓN ES VISIBLE
    if(entry.isIntersecting && !started){

      startCounters();

      started = true;
    }
  });

}, {

  threshold: 0.4
});

// OBSERVAMOS
observer.observe(statsSection);
