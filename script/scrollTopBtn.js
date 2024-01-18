const scrollTopBtn = document.querySelector(".scroll-top-button");
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

scrollTopBtn.addEventListener("mouseover", () => {
  scrollTopBtn.src = "./media/scroll-top-btn-after-hover.png";
});

scrollTopBtn.addEventListener("mouseout", () => {
  scrollTopBtn.src = "./media/scroll-top-btn.png";
});
