console.log('Hello, world!');
// function initBurgerMenu() {
//     const burger = document.querySelector('.header__burger');
//     const links = document.querySelector('.header__links-wrapper');
//     const body = document.querySelector('body');

//     function clickedLinkHandler(event){
//         if(!burger.classList.contains('header__burger--active')) return;
//         if (event.target.tagName !== 'A') return;

//         body.classList.remove('js-lock');
//         burger.classList.remove('header__burger--active');
//         links.classList.remove('header__links-wrapper--active');
//     }

//     function toggleBurgerHandler() {
//         body.classList.toggle('js-lock');
//         burger.classList.toggle('header__burger--active');
//         links.classList.toggle('header__links-wrapper--active');

//         links.addEventListener('click', clickedLinkHandler, { once: true })
//     }
    
//     burger.addEventListener('click', toggleBurgerHandler);
// }

// document.addEventListener('DOMContentLoaded', initBurgerMenu)

// function initSlider() {
//     const bars = document.querySelectorAll('.favorites__slider-progress-bar');
//     const slideContainer = document.querySelector('.favorites__slider-window');
//     const track = document.querySelector('.favorites__slider-track');
//     const prevBtn = document.querySelector('[data-slider-btn="prev"]');
//     const nextBtn = document.querySelector('[data-slider-btn="next"]');

//     let startPointerX;
//     let currentSlideIndex = 0;

//     function rollSliderTrack() {
//         const slidesCount = track.childElementCount;
//         const trackWidth = `${100 * slidesCount}%`;
//         track.style.width = trackWidth;

//         const percentageWidth = -(currentSlideIndex * 100);
//         track.style.transform = `translateX(${percentageWidth / slidesCount}%)`;
//     }

//     function resetBarAnimation() {
//         bars[currentSlideIndex].removeEventListener('animationend', animationEndHandler);
//         bars[currentSlideIndex].classList.remove('favorites__slider-progress-bar--animated');
//     }

//     function startBarAnimation() {
//         bars[currentSlideIndex].classList.add('favorites__slider-progress-bar--animated');
//         rollSliderTrack();
//         bars[currentSlideIndex].addEventListener('animationend', animationEndHandler);
//     }

//     function animationEndHandler() {
//         resetBarAnimation();
//         currentSlideIndex += 1;

//         if (currentSlideIndex > bars.length - 1) {
//             currentSlideIndex = 0;
//         }

//         startBarAnimation();
//     }

//     function prevBar() {
//         resetBarAnimation();
//         currentSlideIndex -= 1;

//         if (currentSlideIndex < 0) {
//             currentSlideIndex = bars.length - 1;
//         }

//         startBarAnimation();
//     }

//     function nextBar() {
//         resetBarAnimation();
//         currentSlideIndex += 1;

//         if (currentSlideIndex > bars.length - 1) {
//             currentSlideIndex = 0;
//         }

//         startBarAnimation();
//     }

//     function keydownHandler(event) {
//         if (event.key === 'ArrowLeft') {
//             prevBar();
//         }

//         if (event.key === 'ArrowRight') {
//             nextBar();
//         }
//     }

//     function pauseAnimationOnHover(event) {
//         event.preventDefault();
//         bars[currentSlideIndex].style.animationPlayState = 'paused';
//     }

//     function resumeAnimationOnLeave() {
//         bars[currentSlideIndex].style.animationPlayState = 'running';
//     }

//     function touchDownHandler(event) {
//         startPointerX = event.touches[0].screenX;
//     }

//     function touchUpHandler(event) {
//         const minSwipingDistance = 20;
//         const currentPointerX = event.changedTouches[0].screenX;
//         const swipingLength = currentPointerX - startPointerX;

//         if (swipingLength > minSwipingDistance) {
//             prevBar();
//         }

//         if (swipingLength < -minSwipingDistance) {
//             nextBar();
//         }
//     }

//     prevBtn.addEventListener('click', prevBar);
//     nextBtn.addEventListener('click', nextBar);

//     slideContainer.addEventListener('touchstart', touchDownHandler);
//     slideContainer.addEventListener('touchstart', pauseAnimationOnHover);

//     slideContainer.addEventListener('touchend', touchUpHandler);
//     slideContainer.addEventListener('touchend', resumeAnimationOnLeave);
    
//     slideContainer.addEventListener('pointerenter', pauseAnimationOnHover);
//     slideContainer.addEventListener('pointerleave', resumeAnimationOnLeave);

//     document.addEventListener('keydown', keydownHandler);

//     startBarAnimation();
// }

// document.addEventListener('DOMContentLoaded', initSlider);