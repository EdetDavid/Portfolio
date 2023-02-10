var loader = document.getElementById("preloader");
var nav = document.getElementById("nav");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

window.onscroll = function () {
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    nav.classList.add("fixed-top");
  }
};
