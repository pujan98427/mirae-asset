document.addEventListener("DOMContentLoaded", function () {
  function initializeSplide(sliderId, options) {
    const sliderElement = document.querySelector(sliderId);
    if (sliderElement) {
      new Splide(sliderElement, options).mount();
    }
  }

  // Splide slider configurations
  const splideConfigs = {
    avanue: {
      type: "loop",
      perPage: 4,
      focus: "center",
      autoplay: true,
      interval: 7000,
      flickMaxPages: 3,
      updateOnMove: true,
      rewind: true,
      pagination: false,
      arrows: false,
      padding: "10%",
      throttle: 300,
      breakpoints: {
        1200: {
          perPage: 1,
          padding: "30%",
        },
      },
    },
    banner: {
      type: "loop",
      perPage: 1,
      autoplay: false,
      interval: 7000,
      flickMaxPages: 1,
      updateOnMove: true,
      rewind: true,
      pagination: true,
      arrows: false,
    },
  };

  // Initialize Splide sliders
  initializeSplide("#avanue", splideConfigs.avanue);
  initializeSplide("#banner", splideConfigs.banner);

  const menu = document.querySelector(".mobile-menu");
  const openMenuButton = document.querySelector(".menu-toggle");
  const closeMenuButton = document.querySelector(".close-btn");

  // Function to open the menu
  openMenuButton.addEventListener("click", () => {
    menu.classList.add("translate-x-0");
    menu.classList.remove("translate-x-full");
  });
  closeMenuButton.addEventListener("click", () => {
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
  });

  const scrollSticky = document.querySelector(".scrollSticky");
  const scrollToTopButton = document.querySelector(".scroll-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollSticky.classList.add("show");
    } else {
      scrollSticky.classList.remove("show");
    }
  });
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
