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

      return `<button class="${className}">
      
      ${bulletSVGs[index]}
      
      </button>`;
    },
  },
});

const servicesSwiper = new Swiper(".swiper-services", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 64,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-services-next",
    prevEl: ".swiper-services-prev",
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

      return `<button class="${className}">
      
      ${bulletSVGs[index]}
      
      </button>`;
    },
  },
});
