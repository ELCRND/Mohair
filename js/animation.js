const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.children[0].classList.add("animation-scissors-top");
      entry.target.children[1].classList.add("animation-scissors-bottom");
      entry.target.classList.add("animation-scissors-move");
    }
  });
});

observer.observe(document.querySelector(".scissors-articles"));
observer.observe(document.querySelector(".scissors"));

const observerStatistics = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.children[0].classList.add(
        "animation-indicator-scissors-top"
      );
      entry.target.children[1].classList.add(
        "animation-indicator-scissors-bottom"
      );
      entry.target.classList.add("animation-indicator-scissors-move");
    }
  });
});

document
  .querySelectorAll(".indicator-scissors")
  .forEach((el) => observerStatistics.observe(el));

const observerIndicators = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("q");
    }
  });
});

document
  .querySelectorAll(".indicator__scale")
  .forEach((el) => observerIndicators.observe(el));
