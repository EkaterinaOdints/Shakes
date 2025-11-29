import "./styles/styles.scss";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const initMobileMenu = () => {
  const body = document.body;
  const header = body.querySelector("[data-js-header]");
  const navigation = header?.querySelector("[data-js-navigation]");
  const button = navigation?.querySelector("[data-js-navigation-button]");
  const buttonText = button?.querySelector("[data-js-navigation-button-text]");

  let isMenuOpened = false;

  if (!navigation || !button) {
    return;
  }

  const openMenu = () => {
    header.classList.add("is-menu-opened");
    body.classList.add("overlay");

    if (buttonText) {
      buttonText.textContent = "Закрыть меню";
    }

    isMenuOpened = true;
  };

  const closeMenu = () => {
    header.classList.remove("is-menu-opened");
    body.classList.remove("overlay");

    if (buttonText) {
      buttonText.textContent = "Открыть меню";
    }

    isMenuOpened = false;
  };

  button.addEventListener("click", () => {
    if (isMenuOpened) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (isMenuOpened) {
      closeMenu();
    }
  });
};

const initOffersSlider = () => {
  const slider = document.body.querySelector("[data-js-slider]");

  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    loop: true,
    grid: {
      rows: 2,
    },
    slidesPerView: 2,
    spaceBetween: 24,
    navigation: {
      nextEl: "[data-js-slider-button-next]",
      prevEl: "[data-js-slider-button-prev]",
    },

    breakpoints: {
      1281: {
        spaceBetween: 25,
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
      },

      426: {
        spaceBetween: 21,
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
    },
  });
};

initMobileMenu();
initOffersSlider();
