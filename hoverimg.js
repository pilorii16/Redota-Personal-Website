document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.hover-slideshow').forEach(img => {
        const originalSrc = img.src;
        const hoverImagesAttr = img.getAttribute('data-hover-images');
        if (!hoverImagesAttr) return;

        const hoverImages = hoverImagesAttr.split(',').map(s => s.trim());
        let slideshowImages = [...hoverImages, originalSrc]; // include original at end of cycle
        let currentIndex = 0;
        let intervalId = null;

        // Preload all images
        slideshowImages.forEach(src => {
            const preloadImg = new Image();
            preloadImg.src = src;
        });

        img.addEventListener('mouseenter', () => {
            if (slideshowImages.length === 0) return;

            intervalId = setInterval(() => {
                img.src = slideshowImages[currentIndex];
                currentIndex = (currentIndex + 1) % slideshowImages.length;
            }, 800); // Change every 800ms
        });

        img.addEventListener('mouseleave', () => {
            clearInterval(intervalId);
            img.src = originalSrc;
            currentIndex = 0;
        });
    });
});