import "reset-css";
import "./scss/style.scss";

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import { TweenMax } from "gsap";
import ScrollReveal from "scrollreveal";


// Slider on section with testimonials
const initSwiper = new Swiper(".testimonials", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination"
  }
});

window.onload = () => {
  window.scrollTo(0, 0);

  // Mobile navigation
  document.getElementById("openNav").addEventListener("click", () => {
    document.getElementById("mobileNav").classList.toggle("activeNav");
    document.body.style.overflow = "hidden";

    document.querySelectorAll(".mobileNav nav ul li").forEach((link, index) => {
      TweenMax.fromTo(
        link,
        1,
        {
          ease: Expo.easeOut,
          css: {
            opacity: 0,
            transform: "translateY(-20px)"
          }
        },
        {
          css: {
            opacity: 1,
            transform: "translateY(0)"
          }
        }
      ).delay(0.05 * index + 1 / 10 + 0.2);
    });

    TweenMax.to(document.querySelector(".mobileNav nav"), 1, {
      ease: Expo.easeOut,
      css: {
        height: "200px"
      }
    });
  });

  document.getElementById("closeNav").addEventListener("click", () => {
    document.querySelectorAll(".mobileNav nav ul li").forEach((link, index) => {
      TweenMax.fromTo(
        link,
        1,
        {
          ease: Expo.easeOut,
          css: {
            opacity: 1,
            transform: "translateY(0)"
          }
        },
        {
          css: {
            opacity: 0,
            transform: "translateY(-20px)"
          }
        }
      ).delay(0.05 * index + 1 / 10);
    });

    TweenMax.to(document.querySelector(".mobileNav nav"), 1, {
      ease: Expo.easeOut,
      css: {
        height: "0"
      }
    }).delay(0.8);

    setTimeout(() => {
      document.getElementById("mobileNav").classList.toggle("activeNav");
      document.body.style.overflow = "auto";
    }, 1200);
  });

  // Preloader
  document.getElementById("preloader").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("preloader").classList.toggle("hidden");
  }, 1000);
  document.getElementById("app").classList.add("loaded");

  document.getElementById("pageHeader").classList.remove("scrolled");
  window.addEventListener("scroll", () => {
    // Change header size on scroll
    if (window.scrollY > 0) {
      document.getElementById("pageHeader").classList.add("scrolled");
    } else {
      document.getElementById("pageHeader").classList.toggle("scrolled");
    }

    // Progress Bar
    let getDocHeight = () => {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    };
    let ratio =
      window.scrollY / ((getDocHeight() - window.innerHeight - 20) / 100);
    document.getElementById("progress").style = `width: ${ratio}%`;
  });

  /****
   * Animations
   */
  TweenMax.fromTo(
    document.getElementsByClassName("hero-title"),
    1,
    {
      css: {
        transform: "translateX(20px)",
        opacity: "0"
      }
    },
    {
      css: {
        transform: "translateX(0px)",
        opacity: "1"
      }
    }
  ).delay(1.1);

  TweenMax.fromTo(
    document.getElementsByClassName("hero-text"),
    1,
    {
      css: {
        transform: "translateX(20px)",
        opacity: "0"
      }
    },
    {
      css: {
        transform: "translateX(0px)",
        opacity: "1"
      }
    }
  ).delay(1.25);

  TweenMax.fromTo(
    document.getElementsByClassName("link"),
    1,
    {
      css: {
        transform: "translateX(20px)",
        opacity: "0"
      }
    },
    {
      css: {
        transform: "translateX(0px)",
        opacity: "1"
      }
    }
  ).delay(1.4);
  document
    .querySelectorAll("header .grid .flex nav ul li")
    .forEach((link, index) => {
      TweenMax.from(link, 1, {
        ease: Expo.easeOut,
        css: {
          opacity: 0,
          transform: "translateY(20px)"
        }
      }).delay(0.05 * index + 1 / 10);
    });
  TweenMax.from(".thumbnail", 2.5, {
    ease: Expo.easeOut,
    css: {
      transform: "scale(1.05)"
    }
  });
  ScrollReveal().reveal(
    [
      document.querySelector(".about .wrapper h2"),
      document.querySelector(".about .wrapper p"),
      document.querySelector(".process .wrapper h2"),
      document.querySelector(".process .wrapper p"),
      document.querySelector(".process .wrapper iframe"),
      document.querySelector(".form .wrapper h2"),
      document.querySelector(".form .wrapper p"),
      document.querySelector(".form .wrapper form"),
      document.querySelector(".form .wrapper button"),
      document.querySelector(".about .wrapper .signature")
    ],
    {
      reset: true,
      delay: 100,
      origin: "bottom",
      distance: "20px"
    }
  );
  ScrollReveal().reveal(".line span", {
    reset: true,
    delay: 200,
    duration: 1000,
    origin: "left",
    distance: "100%"
  });
  ScrollReveal().reveal(".quality h4", {
    reset: true,
    delay: 100,
    duration: 500,
    origin: "bottom",
    distance: "15px"
  });
  document
    .querySelectorAll(".statistics .wrapper section")
    .forEach((el, index) => {
      ScrollReveal().reveal(el, {
        reset: true,
        duration: 600,
        delay: (0.07 * index + 1 / 10) * 1000,
        origin: "bottom",
        distance: "25px"
      });
    });
  document
    .querySelectorAll(".services .wrapper section")
    .forEach((el, index) => {
      ScrollReveal().reveal(el, {
        reset: true,
        duration: 600,
        delay: (0.07 * index + 1 / 10) * 1000,
        origin: "bottom",
        distance: "25px"
      });
    });
  document.querySelectorAll(".partners .wrapper .icon").forEach((el, index) => {
    ScrollReveal().reveal(el, {
      reset: true,
      duration: 600,
      delay: (0.07 * index + 1 / 10) * 1000,
      origin: "bottom",
      distance: "25px"
    });
  });
};
