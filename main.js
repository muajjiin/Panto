const nav = document.querySelector("#Panto-nav");
const hero = document.querySelector(".Qualities ");
const hamburger = document.querySelector(".HamBurger__icon");
const sidebar = document.querySelector(".sideBar");
const exit__icon = document.querySelector(".exit");

window.onscroll = function () {
  if (window.scrollY > hero.offsetHeight) {
    nav.classList.add("scrolled");
    sidebar.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    sidebar.classList.remove("scrolled");
  }
};

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
});

exit__icon.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.getAttribute("data-animation");

        entry.target.classList.add(animationClass);
        entry.target.style.opacity = "1";

        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove(animationClass);
        entry.target.style.opacity = "0";
      }
    });
  },
  { threshold: 0.3 },
);

document.querySelectorAll(".on_scroll").forEach((el) => {
  observer.observe(el);
});
