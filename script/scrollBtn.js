const scrollTopBtn = document.querySelector(".scroll-top-button");
const scrollDownBtn = document.querySelector(".scroll-down-button");

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

scrollDownBtn.addEventListener("click", () => {
  console.log("click");
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
  window.scrollTo(0);
});

scrollDownBtn.addEventListener("mouseover", () => {
  scrollDownBtn.src = "./media/scroll-down-btn-after-hover.png";
});

scrollDownBtn.addEventListener("mouseout", () => {
  scrollDownBtn.src = "./media/scroll-down-btn.png";
});
