
// const menuToggle = document.getElementById('menu-toggle');
// const menu = document.getElementById('menu');


// menuToggle.addEventListener('click', () => {
//   menu.classList.toggle('hidden');
// });
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden'); // Toggle the hidden class
});

// Close the menu after clicking a link
const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden'); // Close menu on click
  });
});
