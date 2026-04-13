document.addEventListener("DOMContentLoaded", () => {
  const contentRoot = document.querySelector(".main-content");
  if (!contentRoot) {
    return;
  }

  const images = Array.from(contentRoot.querySelectorAll("img")).filter((img) => {
    return !img.closest(".pk-lightbox") && img.dataset.lightbox !== "off";
  });

  if (images.length === 0) {
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "pk-lightbox";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <div class="pk-lightbox__backdrop"></div>
    <button class="pk-lightbox__close" type="button" aria-label="Sulge pilt">×</button>
    <figure class="pk-lightbox__figure">
      <img class="pk-lightbox__image" alt="">
      <figcaption class="pk-lightbox__caption"></figcaption>
    </figure>
  `;

  document.body.appendChild(overlay);

  const overlayImage = overlay.querySelector(".pk-lightbox__image");
  const overlayCaption = overlay.querySelector(".pk-lightbox__caption");
  const closeButton = overlay.querySelector(".pk-lightbox__close");
  const backdrop = overlay.querySelector(".pk-lightbox__backdrop");

  const closeLightbox = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const openLightbox = (img) => {
    overlayImage.src = img.currentSrc || img.src;
    overlayImage.alt = img.alt || "";
    overlayCaption.textContent = img.alt || "";
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  images.forEach((img) => {
    img.addEventListener("click", () => openLightbox(img));
    img.setAttribute("title", "Ava suuremalt");
  });

  closeButton.addEventListener("click", closeLightbox);
  backdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closeLightbox();
    }
  });
});
