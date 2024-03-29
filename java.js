const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

{
  ("icons");
  [
    { src: "/icon-192.png", type: "imange/png", sizes: "192x192" },
    { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
  ];
}
document.addEventListener("DOMContentLoaded", function () {
  var currentPage = window.location.pathname;
  var menuItems = document.querySelectorAll("nav a");

  menuItems.forEach(function (item) {
    if (item.getAttribute("href") === currentPage) {
      item.parentNode.classList.add("current");
    }
  });
});
