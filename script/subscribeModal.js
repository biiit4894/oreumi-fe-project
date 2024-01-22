const input = document.querySelector(".main-subscribe-email-input");
const subscribBtn = document.querySelector(
  ".main-subscribe-email-input-button"
);
const closeBtn = document.querySelector(".main-subscribe-modal-button");
const modal = document.querySelector(".main-subscribe-modal");

const form = document.querySelector(".main-subscribe-email-form");

const regex = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);

form.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && regex.test(input.value)) {
    modal.style.display = "flex";
  }
});

subscribBtn.addEventListener("click", (event) => {
  if (regex.test(input.value)) {
    modal.style.display = "flex";
  } else if (input.value.replace(/^ +/, "") === "") {
    alert("이메일을 입력해 주세요.");
  } else {
    alert("이메일 형식이 올바르지 않습니다.");
  }
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
