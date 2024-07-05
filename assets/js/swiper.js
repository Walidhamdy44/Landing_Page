// Initialize Swiper
const swiper = new Swiper(".swiper", {
  // Set the direction of the swiper
  direction: "horizontal",
  // Enable loop mode
  loop: true,
  // Set the speed of the swiper
  speed: 700,
  // Enable autoplay with a delay of 3 seconds
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // Enable pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Enable grab cursor
  grabCursor: true,
  // Set the effect of the swiper
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
  // Add a slide change transition end event
  on: {
    slideChangeTransitionEnd: function () {
      // Get the active slide
      const activeSlide = this.slides[this.activeIndex];
      // Get the box element in the active slide
      const box = activeSlide.querySelector(".box");
      // Get all the text elements in the box
      const textElements = box.querySelectorAll(".btn,h1, p");
      // Animate each text element
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
