'use strict';

// Buttons
const needsBtn = document.querySelector('.needs-btn');
const charact = document.querySelector('.charact-btn');

// Box
const needs = document.querySelector('.needs');
const characteristics = document.querySelector('.characteristics');

charact.addEventListener('click', function () {
  console.log('Click');

  charact.classList.add('active');
  needs.style.display = 'none';
  characteristics.style.display = 'grid';
  needsBtn.classList.remove('active');
});

needsBtn.addEventListener('click', function () {
  needsBtn.classList.add('active');
  characteristics.style.display = 'none';
  needs.style.display = 'grid';
  charact.classList.remove('active');
});

// Sticky Navigation

const heroSectionEl = document.querySelector('.hero-section');

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
obs.observe(heroSectionEl);
