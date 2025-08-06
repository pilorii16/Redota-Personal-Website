document.addEventListener("DOMContentLoaded", function () {
  // Hover slideshow (your existing code)
  document.querySelectorAll('.hover-slideshow').forEach(img => {
    const originalSrc = img.src;
    const hoverImagesAttr = img.getAttribute('data-hover-images');
    if (!hoverImagesAttr) return;

    const hoverImages = hoverImagesAttr.split(',').map(s => s.trim());
    let slideshowImages = [...hoverImages, originalSrc];
    let currentIndex = 0;
    let intervalId = null;

    // Preload images
    slideshowImages.forEach(src => {
      const preloadImg = new Image();
      preloadImg.src = src;
    });

    img.addEventListener('mouseenter', () => {
      if (slideshowImages.length === 0) return;
      intervalId = setInterval(() => {
        img.src = slideshowImages[currentIndex];
        currentIndex = (currentIndex + 1) % slideshowImages.length;
      }, 800);
    });

    img.addEventListener('mouseleave', () => {
      clearInterval(intervalId);
      img.src = originalSrc;
      currentIndex = 0;
    });
  });

  // Modal setup
  const modal = document.getElementById("imageModal");
  const modalMainImage = document.getElementById("modalMainImage");
  const modalThumbnails = document.getElementById("modalThumbnails");
  const modalClose = document.querySelector(".modal .close");

  // Function to open modal with images
  function openModalWithImages(img) {
    const baseSrc = img.getAttribute("src");
    const hoverAttr = img.getAttribute("data-hover-images");
    const extraImages = hoverAttr ? hoverAttr.split(",").map(i => i.trim()) : [];
    const allImages = [baseSrc, ...extraImages];

    modalMainImage.src = baseSrc;
    modalThumbnails.innerHTML = "";

    allImages.forEach((src) => {
      const thumb = document.createElement("img");
      thumb.src = src;
      thumb.classList.add("thumbnail");
      thumb.style.width = "60px";
      thumb.style.margin = "5px";
      thumb.style.cursor = "pointer";
      thumb.style.borderRadius = "8px";
      thumb.style.objectFit = "cover";

      thumb.addEventListener("click", () => {
        modalMainImage.src = src;
      });

      modalThumbnails.appendChild(thumb);
    });

    modal.style.display = "flex";
  }

  // 🖼 Click image to open modal
  document.querySelectorAll(".work-card img").forEach((img) => {
    img.addEventListener("click", function () {
      openModalWithImages(img);
    });
  });

  // 🔘 Click "View Images" button to open modal
  document.querySelectorAll(".view-images-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const card = button.closest(".work-card");
      const img = card.querySelector("img.hover-slideshow");
      if (img) {
        openModalWithImages(img);
      }
    });
  });

  // ❌ Close modal
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // 🧼 Optional: close modal when clicking outside
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
