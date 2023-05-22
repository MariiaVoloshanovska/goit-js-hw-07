import { galleryItems } from "./gallery-items.js";
// Change code below this line

const newGallery = document.querySelector(".gallery");
const galleryForHtml = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class = "gallery__item">
      <a class="gallery__link" href = ${original}>
      <img src = ${preview} alt = '${description}' 
      data-source = ${original} class = "gallery__image"></a></li>`
  )
  .join("");

newGallery.insertAdjacentHTML("beforeend", galleryForHtml);

const evImage = (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  //open modal window (show) from new galery
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" 
  alt="${e.target.alt}" width="800" height="600">`,
    // видалити "keydown" з вікна
    {
      onClose: (instance) => newGallery.removeEventListener("keydown", сloseWinEscape),
    }
  );
  // callback (задкриття по кнопці "Esc" )
  function сloseWinEscape(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
  if (instance.visible()) {
    newGallery.addEventListener("keydown", сloseWinEscape);
  }
};

newGallery.addEventListener("click", evImage);

//   // //done close for ESC (close modal window)
// if (instance.visible()) {
//   newGallery.addEventListener("keydown", (e) => {
//     if (e.code === "Escape") {
//       instance.close();
//     }
//   });
// }
