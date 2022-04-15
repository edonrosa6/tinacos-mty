gsap.from('.animacion', {
  scrollTrigger: {
    trigger: '.animacion',
    toggleActions: "restart pause restart none"
  },
  duration: 1.5, 
  x: 500,
  opacity: 0
});