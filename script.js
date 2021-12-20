const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
 
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   spaceBetween: 180,
   centeredSlides:true,
   slidesPerView: 4.3,

   autoplay: {
    delay: 3000,
  },

  });

