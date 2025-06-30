// testimonials-carousel.js

// Testimonios dinámicos y auto-scroll vertical
(function(){
  const data = [
  { name: "Ezequiel D.", city: "Tucumán", time: "10:28", text: "Vi el anuncio en Instagram y entré a la plataforma de GANAMOS ¡terminé ganando! 🎉 NO TE PIERDAS NUESTRO BONO DE BIENVENIDA" },
  { name: "Camila R.", city: "Neuquén", time: "21:34", text: "El bono de bienvenida del sitio de GANAMOS me ayudó a duplicar mis chances. ¡Increíble experiencia!" },
  { name: "Rodrigo M.", city: "Bahía Blanca", time: "19:20", text: "Los cajeros de la página de GANAMOS son muy buena onda, te explican todo si tenés dudas 😉" },
  { name: "Florencia T.", city: "Formosa", time: "08:57", text: "Entré por una historia de Instagram y probé la plataforma de GANAMOS, muy divertido." },
  { name: "Agustín L.", city: "San Luis", time: "15:46", text: "Los retiros por QR en el sitio de GANAMOS fueron rapidísimos, todo perfecto ⚡" },
  { name: "Milagros J.", city: "Río Gallegos", time: "17:55", text: "Aproveché el bono de bienvenida de la plataforma de GANAMOS y pude jugar más tiempo." },
  { name: "Tomás G.", city: "Concordia", time: "11:03", text: "La página de GANAMOS tiene muy buena onda, es como jugar con amigos." },
  { name: "Natalia M.", city: "Chaco", time: "20:18", text: "No soy de confiar mucho, pero la app de GANAMOS me sorprendió para bien 😊" },
  { name: "Franco E.", city: "San Rafael", time: "09:42", text: "Me recomendaron el sitio de GANAMOS y ahora soy yo el que lo recomienda 👍" },
  { name: "Bianca Z.", city: "Villa María", time: "12:30", text: "Ideal para pasar el rato y ganar algo extra desde la plataforma de GANAMOS." },
  { name: "Facundo C.", city: "Catamarca", time: "14:48", text: "La atención al cliente de GANAMOS en su página fue excelente, muy amables todos." },
  { name: "Juliana B.", city: "Misiones", time: "13:17", text: "¡Qué suerte tuve! Entré en la plataforma de GANAMOS y retiré en la misma tarde." },
  { name: "Ramiro T.", city: "La Rioja", time: "16:10", text: "El bono de primera carga en la app de GANAMOS te da una gran ventaja para arrancar." },
  { name: "Micaela A.", city: "Corrientes", time: "18:00", text: "La mejor parte es lo amable que son los que atienden en la plataforma de GANAMOS. Da gusto." },
  { name: "Gonzalo N.", city: "Pergamino", time: "19:45", text: "Entré sin expectativas en la página de GANAMOS y terminé recomendándola a mis amigos." },
  { name: "Noelia S.", city: "Trelew", time: "10:05", text: "Me encanta jugar desde la cama con GANAMOS y encima gané dos veces 🛏️💸" },
  { name: "Matías I.", city: "Olavarría", time: "22:30", text: "Vi el bono de primera carga en la plataforma de GANAMOS y no lo dudé." },
  { name: "Cintia Q.", city: "San Fernando", time: "07:59", text: "El trato en la página de GANAMOS fue excelente, te hacen sentir segura y bienvenida." },
  { name: "Esteban Y.", city: "Esquel", time: "23:12", text: "Muy recomendable la app de GANAMOS, tanto por su interfaz como por la gente detrás." },
  { name: "Valeria P.", city: "Salta", time: "09:15", text: "Las tragamonedas en el sitio de GANAMOS son lo más 🎰 ¡Me pasé horas jugando!" },
  { name: "Hugo S.", city: "Mar del Plata", time: "20:45", text: "El soporte en vivo de GANAMOS respondió al toque, muy rápido y eficiente." },
  { name: "Danilo F.", city: "Bahía Blanca", time: "13:22", text: "Me encanta el torneo semanal de póker de la plataforma GANAMOS, ¡adrenalina al máximo!" },
  { name: "Lucía N.", city: "Bariloche", time: "17:30", text: "Recomendada por un amigo, ¡ya somos todos usuarios felices de GANAMOS!" },
  { name: "Ignacio V.", city: "Mendoza", time: "21:10", text: "Cobré mis ganancias en minutos gracias al sitio de GANAMOS, super eficiente ⏱️" },
  { name: "Sofía K.", city: "Rosario", time: "12:05", text: "La página de GANAMOS es muy intuitiva, encontrás todo al toque." },
  { name: "Germán L.", city: "Posadas", time: "18:40", text: "Los botes progresivos de blackjack en GANAMOS son una locura, gané un buen extra 🃏" },
  { name: "Sandra M.", city: "Salto", time: "08:25", text: "El bono de bienvenida en la plataforma de GANAMOS me permitió probar varios juegos gratis." },
  { name: "Marcos R.", city: "Santiago del Estero", time: "15:55", text: "La sección de apuestas deportivas del sitio de GANAMOS está genial, ¡a 5 estrellas!" },
  { name: "Paula G.", city: "Santa Fe", time: "11:48", text: "Me llamó la atención la variedad de ruletas en la página de GANAMOS, muy realistas." },
  { name: "Diego C.", city: "Ushuaia", time: "22:01", text: "Mis amigos y yo competimos en los torneos en vivo de GANAMOS, muy divertido 😎" },
  { name: "Ana T.", city: "Paraná", time: "16:37", text: "El retiro por transferencia bancaria en la plataforma de GANAMOS fue instantáneo, ¡ni lo esperaba!" },
  { name: "Federico U.", city: "Junín", time: "19:27", text: "Las bonificaciones semanales en la página de GANAMOS me tienen enganchado, siempre algo nuevo." },
  { name: "Silvina P.", city: "Vicente López", time: "14:10", text: "La interfaz de la plataforma de GANAMOS es súper clara, no tuve ningún problema para empezar." },
  { name: "Lucas V.", city: "Santa Rosa", time: "09:50", text: "Cada vez que ingreso al sitio de GANAMOS hay nuevas promociones, ¡me encanta la variedad!" },
  { name: "Beatriz O.", city: "La Plata", time: "18:22", text: "La comunidad de la plataforma de GANAMOS es muy amigable, compartimos tips todo el tiempo." },
  { name: "Martín S.", city: "Morón", time: "20:05", text: "GANAMOS tiene torneos diarios en su página que ponen la adrenalina por las nubes." },
  { name: "Daniela R.", city: "Villa Crespo", time: "11:11", text: "El sistema de seguridad de la plataforma de GANAMOS me genera mucha confianza al depositar." }
];


  const container = document.getElementById('testimonialsCarousel');
  let idx = 0, timer;

  // Crear y anexar elementos al contenedor
  data.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'testimonial-item';
    div.innerHTML = `
      <p>"${item.text}"</p>
      <div class="meta">${item.name}, ${item.city} · ${item.time}</div>
    `;
    container.appendChild(div);
  });

  const items = container.querySelectorAll('.testimonial-item');

  function show(index) {
    items.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
  }

  function next() {
    idx = (idx + 1) % items.length;
    show(idx);
  }

  // Mostrar el primero y lanzar auto-scroll
  show(0);
  timer = setInterval(next, 4000);

  // Pausar al hacer hover o touch
  container.addEventListener('mouseenter', () => clearInterval(timer));
  container.addEventListener('mouseleave', () => timer = setInterval(next, 4000));
  container.addEventListener('touchstart', () => clearInterval(timer));
  container.addEventListener('touchend', () => timer = setInterval(next, 4000));
})();


