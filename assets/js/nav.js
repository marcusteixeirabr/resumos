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

/* Lightbox para galeria de slides */
(function () {
  const lb      = document.getElementById('lightbox');
  if (!lb) return;
  const lbImg   = lb.querySelector('.lightbox-img');
  const lbCap   = lb.querySelector('.lightbox-caption');
  let allSlides = [], current = 0;

  function open(slides, idx) {
    allSlides = slides; current = idx;
    render();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  function render() {
    const s = allSlides[current];
    lbImg.src = s.src;
    lbCap.textContent = allSlides.length > 1
      ? `${s.caption}  (${current + 1}/${allSlides.length})`
      : s.caption;
  }

  document.addEventListener('click', e => {
    const item = e.target.closest('.slide-item');
    if (!item) return;
    const gallery = item.closest('.slides-grid');
    const items   = [...gallery.querySelectorAll('.slide-item')];
    const slides  = items.map(i => ({
      src:     i.querySelector('img').src,
      caption: i.querySelector('figcaption')?.textContent || ''
    }));
    open(slides, items.indexOf(item));
  });

  lb.querySelector('.lightbox-close').addEventListener('click', close);
  lb.querySelector('.lightbox-prev').addEventListener('click', () => { current = (current - 1 + allSlides.length) % allSlides.length; render(); });
  lb.querySelector('.lightbox-next').addEventListener('click', () => { current = (current + 1) % allSlides.length; render(); });
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft')  { current = (current - 1 + allSlides.length) % allSlides.length; render(); }
    if (e.key === 'ArrowRight') { current = (current + 1) % allSlides.length; render(); }
  });
})();
