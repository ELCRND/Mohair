import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const brandsSwiper = new Swiper(".swiper-hero", {
  loop: true,
  slidesPerView: 1,
  allowTouchMove: false,
  effect: "fade",
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-hero-next",
    prevEl: ".swiper-hero-prev",
  },
  pagination: {
    el: ".swiper-hero-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const bulletSVGs = [
        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk1">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="4" fill="white" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#fff" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk1)">
            </circle>

        </svg>
        `,

        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk2">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="4" fill="white" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#fff" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk2)">
            </circle>

        </svg>
        `,

        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk3">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="4" fill="white" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#fff" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk3)">
            </circle>

        </svg>
        `,
      ];

      return `<div class="${className}">
      
      ${bulletSVGs[index]}
      
      </div>`;
    },
  },
});

const servicesSwiper = new Swiper(".swiper-services", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 64,
  grabCursor: true,
  breakpoints: {
    481: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-services-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const bulletSVGs = [
        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk4">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="5" fill="#000" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#000" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk4)">
            </circle>

        </svg>
        `,

        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk5">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="5" fill="#000" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#000" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk5)">
            </circle>

        </svg>
        `,

        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk6">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="5" fill="#000" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#000" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk6)">
            </circle>

        </svg>
        `,

        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk7">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="5" fill="#000" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#000" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk7)">
            </circle>

        </svg>
        `,

        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk8">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="5" fill="#000" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#000" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk8)">
            </circle>

        </svg>
        `,
      ];

      return `<div class="${className}">
      
      ${bulletSVGs[index]}
      
      </div>`;
    },
  },
});

const reviewsSwiper = new Swiper(".swiper-reviews", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  breakpoints: {
    769: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-reviews-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const bulletSVGs = [
        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk9">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="5" fill="#000" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#000" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk9)">
            </circle>

        </svg>
        `,

        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk10">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="5" fill="#000" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#000" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk10)">
            </circle>

        </svg>
        `,

        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk11">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="5" fill="#000" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#000" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk11)">
            </circle>

        </svg>
        `,

        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk12">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="5" fill="#000" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#000" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk12)">
            </circle>

        </svg>
        `,

        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk13">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="5" fill="#000" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#000" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk13)">
            </circle>

        </svg>
        `,
        `
        <svg width="40" height="40" viewBox="0 0 50 50">

            <defs>
                <mask id="msk14">
                    <circle class="maskCircle" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="8"
                        stroke-linecap='round' stroke-dashoffset="0" stroke-dasharray="125.6" >
                    </circle>
                </mask>
            </defs>

            <circle class="background" cx="25" cy="25" r="5" fill="#000" stroke="none"
                stroke-linecap='round' />

            <circle class="default" cx="25" cy="25" r="20" fill="none" stroke="#000" stroke-width="2"
                stroke-linecap='round' stroke-dasharray="12,6" stroke-dashoffset="1" mask="url(#msk14)">
            </circle>

        </svg>
        `,
      ];

      return `<div class="${className}">
      
      ${bulletSVGs[index]}
      
      </div>`;
    },
  },
});

const clientsSwiper = new Swiper(".swiper-clients", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  grabCursor: true,
  breakpoints: {
    641: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 5,
    },
    1025: {
      slidesPerView: 7,
    },
  },
  autoplay: {
    delay: 4000,
  },
});
