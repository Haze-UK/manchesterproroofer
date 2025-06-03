// ================
// MENU TOGGLE
// ================
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('opacity-0');
  mobileNav.classList.toggle('pointer-events-none');
});

// ================
// SLIDER DOTS (Mock Only)
// ================
// This section assumes you're switching backgrounds via JS in production.
// For now, we'll simulate it by cycling dot 'active' class on load.

const dots = document.querySelectorAll('.dot');
let activeIndex = 0;

function setActiveDot(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

setActiveDot(activeIndex);

// Optional: cycle every 5s to simulate sliding
setInterval(() => {
  activeIndex = (activeIndex + 1) % dots.length;
  setActiveDot(activeIndex);
}, 5000);
