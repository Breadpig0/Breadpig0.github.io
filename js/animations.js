document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade");

  function checkVisibility() {
    fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        element.classList.add("visible");

        if (element.classList.contains("fade-up")) {
          element.style.animation = "fadeInUp 0.6s ease-out";
        } else if (element.classList.contains("fade-down")) {
          element.style.animation = "fadeInDown 0.6s ease-out";
        } else if (element.classList.contains("fade-left")) {
          element.style.animation = "fadeInLeft 0.6s ease-out";
        } else if (element.classList.contains("fade-right")) {
          element.style.animation = "fadeInRight 0.6s ease-out";
        }
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
