import Swiper from 'swiper/bundle';

const initSwiper = () => {
  const swiper = new Swiper('.slider__container', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    autoHeight: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },

    breakpoints: {
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });

  swiper.init();

  swiper.on('resize', () => {
    if (window.screen.width >= 1024) {
      document.querySelector('.slider__container').classList.add('swiper-no-swiping');
      document.querySelectorAll('.slider__nav').forEach((item) => {
        item.classList.remove('swiper-button-disabled');
      });
    }
    if (window.screen.width < 1024) {
      document.querySelector('.slider__container').classList.remove('swiper-no-swiping');
      document.querySelectorAll('.slider__nav').forEach((item) => {
        item.classList.remove('swiper-button-disabled');
      });
    }
    if (window.screen.width < 768) {
      document.querySelectorAll('.slider__nav').forEach((item) => {
        item.classList.add('swiper-button-disabled');
      });
    }
  });

  swiper.on('slideChange', () => {
    let allSlides = document.querySelector('.slider__total');
    let currentSlides = document.querySelector('.slider__current');
    const length = swiper.slides.length;

    allSlides.innerHTML = length / 2;
    let current = (++swiper.realIndex + 1) / 2;
    currentSlides.innerHTML = current;
  });
};

export {initSwiper};
