/** SLIDESHOW IMAGES INDEX PAGE */
const images = document.querySelectorAll(".slide");
let imgActive = 0;
let interval = setInterval(next, 7000);
images[imgActive].classList.add("show");

// hidde first picture
for (let i = 1; i < images.length; i += 1) {
  images[i].classList.add("hidden");
}

// Next click button
function next() {
  images[imgActive].classList.remove("show");
  images[imgActive].classList.add("hidden");
  imgActive += 1;
  if (imgActive >= images.length) {
    imgActive = 0;
  }
  images[imgActive].classList.remove("hidden");
  setTimeout(() => {
    images[imgActive].classList.add("show");
  }, 300);
}

document.querySelector("#next").addEventListener("click", function () {
  next();
});

// Previous click button
function prev() {
  images[imgActive].classList.remove("show");
  images[imgActive].classList.add("hidden");
  imgActive -= 1;
  if (imgActive < 0) {
    imgActive = images.length - 1;
  }
  images[imgActive].classList.remove("hidden");
  setTimeout(() => {
    images[imgActive].classList.add("show");
  }, 300);
}

document.querySelector("#prev").addEventListener("click", function () {
  prev();
});
