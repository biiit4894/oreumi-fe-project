const input = document.querySelector(".main-subscribe-email-input");
const subscribBtn = document.querySelector(
  ".main-subscribe-email-input-button"
);
const closeBtn = document.querySelector(".main-subscribe-modal-button");
const modal = document.querySelector(".main-subscribe-modal");

subscribBtn.addEventListener("click", (event) => {
  // event.preventDefault();
  console.log("value: " + input.value);
  if (input.value.includes("@")) {
    modal.style.display = "flex";
  }
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
