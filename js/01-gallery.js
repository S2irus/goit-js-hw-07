import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
console.log(gallery);
galleryItems.forEach((item) => {
  const galleryMarkup = `<li class = "gallery__item">
        <a class = "gallery__link" href = "${item.original}">
            <img class="gallery__image" src="${item.preview}" data-source = "${item.original}" alt="${item.description}" />
        </a>
        </li >`;
  gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
});

const galleryImages = document.querySelectorAll(".gallery__image");
console.log(galleryImages);

galleryImages.forEach((image) => {
  image.addEventListener("click", (event) => {
    event.preventDefault();

    const source = image.dataset.source;

    const lightbox = basicLightbox.create(
      `<img src="${source}" width="800" height="600">`
    );

    lightbox.show(() => console.log("lightbox now visible"));

    window.addEventListener("keydown", (event) => {
      const visible = basicLightbox.visible();
      if (visible && event.key === "Escape") {
        lightbox.close(() => console.log("lightbox not visible anymore"));
      }
    });
  });
});
