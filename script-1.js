'use strict';

const sectionHeroEl = document.querySelector('.hero-section');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },

  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-350px',
  }
);
obs.observe(sectionHeroEl);
