/* Navegação por seções sem reload de página */
(function () {
  const links = document.querySelectorAll('[data-sec]');
  const sections = document.querySelectorAll('section[id]');

  function show(id) {
    sections.forEach(s => s.classList.toggle('active', s.id === id));
    links.forEach(a => a.classList.toggle('active', a.dataset.sec === id));
    window.scrollTo(0, 0);
  }

  links.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      show(a.dataset.sec);
    });
  });
})();
