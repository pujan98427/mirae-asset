document.addEventListener("DOMContentLoaded", () => {
  // Utility function to initialize Splide sliders
  const initializeSplide = (selector, options) => {
    const sliderElement = document.querySelector(selector);
    if (sliderElement) new Splide(sliderElement, options).mount();
  };

  // Splide slider configurations
  const splideConfigs = {
    avanue: {
      type: "loop",
      perPage: 4,
      focus: "center",
      autoplay: true,
      interval: 7000,
      rewind: true,
      pagination: false,
      arrows: false,
      padding: "10%",
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
      rewind: true,
      pagination: true,
      arrows: false,
    },
  };

  // Initialize Splide sliders
  ["#avanue", "#banner"].forEach((selector, index) => {
    const config = index === 0 ? splideConfigs.avanue : splideConfigs.banner;
    initializeSplide(selector, config);
  });

  // Mobile menu handling
  const menu = document.querySelector(".mobile-menu");
  const [openMenuButton, closeMenuButton] = [
    document.querySelector(".menu-toggle"),
    document.querySelector(".close-btn"),
  ];

  if (menu && openMenuButton && closeMenuButton) {
    openMenuButton.addEventListener("click", () => {
      menu.classList.add("translate-x-0");
      menu.classList.remove("translate-x-full");
    });

    closeMenuButton.addEventListener("click", () => {
      menu.classList.add("translate-x-full");
      menu.classList.remove("translate-x-0");
    });
  }

  // Scroll sticky and scroll-to-top functionality
  const scrollSticky = document.querySelector(".scrollSticky");
  const scrollToTopButton = document.querySelector(".scroll-top");

  if (scrollSticky && scrollToTopButton) {
    const handleScroll = () => {
      scrollSticky.classList.toggle("show", window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
