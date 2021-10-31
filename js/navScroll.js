// HIDDEN NAVBAR ON SCROLL
let nav = document.querySelector("nav");

// Scrool Navbar
window.addEventListener("scroll", () => {
   if (window.scrollY < 150) {
     nav.style.top = 0;
   } else {
     nav.style.top = "-125px";
   }
 });
 