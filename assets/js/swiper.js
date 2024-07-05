const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 700,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  on: {
    slideChangeTransitionEnd: function () {
      const activeSlide = this.slides[this.activeIndex];
      const box = activeSlide.querySelector(".box");
      const textElements = box.querySelectorAll(".btn,h1, p");
      textElements.forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 50,
          duration: 1.5,
          ease: "power1.in",
        });
      });
    },
  },
});
