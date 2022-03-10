let slider = document.querySelector('.swiper');
let slider1 = document.querySelector('.swiper1');

let swiper = new Swiper(slider, {
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

  let swiper1 = new Swiper(slider1, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
        
    slidesPerView: 1,

   autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
  },
  });

