const btn = document.getElementById("btn");
const closes = document.getElementById("closes");
const modal = document.getElementById("modal-content");
const wrapper = document.getElementById("modal-wrapper");
const dataContainer = document.getElementById("data-container");

btn.onclick = () => {
  modal.style.display = "flex";
  wrapper.classList.add("modal-wrapper");
  dataContainer.style.overflow = "hidden";
};

closes.onclick = () => {
  modal.style.display = "none";
  wrapper.classList.remove("modal-wrapper");
  dataContainer.style.overflow = "auto";
};
