gsap.from('.animacion', {
  scrollTrigger: {
    trigger: '.animacion',
    toggleActions: "restart pause restart none"
  },
  duration: 1.5, 
  y: 200,
  opacity: 0
});