import { galleryItems } from "./gallery-items.js";
// Change code below this line

const newGallery = document.querySelector(".gallery");
const galleryForHtml = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class = "gallery__item">
      <a class="gallery__link" href = ${original}>
      <img src = ${preview} alt = ${description} 
      data-source = ${original} class = "gallery__image"></a></li>`
  )
  .join("");

newGallery.insertAdjacentHTML("beforeend", galleryForHtml);

const evImage = (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  //open modal window (show)
  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" alt="${e.target.alt}" width="800" height="600">`);
  instance.show();

  //done close for ESC (close modal window)
  if (instance.visible()) {
    newGallery.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        instance.close();
      }
    });
  }
};

newGallery.addEventListener("click", evImage);
