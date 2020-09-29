const navSlide = () => {
  const burger = document.querySelector(".logo-menu");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .3s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });

  navLinks.forEach((navlink) => {
    navlink.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade .3s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });

      // Burger Animation
      burger.classList.toggle("toggle");
    });
  });
};

const expanderSlide = () => {
  /* const expander = document.querySelectorAll(".expander"); */
  const logos = document.querySelectorAll(".logo");
  const expanders = document.querySelectorAll(".expander");

  logos.forEach((logo, index) => {
    logo.addEventListener("click", () => {
      expanders.forEach((expander) => {
        if (Array.from(expander.classList).includes("link-active")) {
          expander.classList.toggle("link-active");
        }
      });
      expanders[index].classList.toggle("link-active");
    });
  });
};

const cardAnimation = () => {
  const cards = document.querySelectorAll(
    ".icon"
  ); /* make click happen on clicking card, not icon */
  const icons = document.querySelectorAll(".spinner");
  const overlays = document.querySelectorAll(".card-overlay");
  const buttons = document.querySelectorAll(".btn-close");
  const content = document.querySelectorAll(".card-overlay-content ");
  const contentButtons = document.querySelectorAll(".card-overlay-buttons");

  icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      icon.style.animation = "spin .7s ease ";
      overlays[index].style.animation =
        "overlayBackground .5s ease .3s forwards";
      overlays[index].classList.toggle("card-overlay-active");
      content[index].classList.toggle("content-overlay-active");
      contentButtons[index].classList.toggle("content-overlay-active");
    });
  });

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      icons[index].style.animation = "";
      overlays[index].style.animation = "";
      overlays[index].classList.toggle("card-overlay-active");
      content[index].classList.toggle("content-overlay-active");
      contentButtons[index].classList.toggle("content-overlay-active");
    });
  });
};

/* const iconAnimation = () => {
  const icons = document.querySelectorAll(".spinner");
  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      if (icon.style.animation) {
        icon.style.animation = "";
      } else {
        icon.style.animation = "fade .3s ease ";
      }
    });
  });
};

const overlayAnimation = () => {
  const icons = document.querySelectorAll(".spinner");
  const overlay = document.querySelector(".card-overlay");
  const paragraph = document.querySelector(".card-overlay-content");

  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      overlay.style.animation = "overlay .6s ease ";

      overlay.classList.toggle("card-overlay-active");
      paragraph.style.animation = "paraFadeIn 1s ease .8s forwards";
    });
  });
}; */

navSlide();
expanderSlide();
cardAnimation();
/* iconAnimation();
overlayAnimation(); */
