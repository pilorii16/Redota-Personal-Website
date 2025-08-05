 document.addEventListener("DOMContentLoaded", () => {
    const titles = [
      "UI/UX Designer",
      "Front-end Developer",
      "Graphic Artist",
      "Graphic Designer"
    ];
    const titleElement = document.getElementById("changing-title");
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentTitle = titles[currentIndex];
      const displayedText = currentTitle.substring(0, charIndex);
      titleElement.textContent = displayedText;

      if (!isDeleting && charIndex < currentTitle.length) {
        charIndex++;
        setTimeout(typeEffect, 100); // typing speed
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50); // deleting speed
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          currentIndex = (currentIndex + 1) % titles.length;
        }
        setTimeout(typeEffect, 1000); // pause before deleting or typing
      }
    }

    typeEffect();
  });