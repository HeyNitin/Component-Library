var btn = document.getElementById("btn");
var closes = document.getElementById("closes");
var modal = document.getElementById("modal-content");
var wrapper = document.getElementById("modal-wrapper");

btn.onclick = () => {
  modal.style.display = "flex";
  wrapper.classList.add("modal-wrapper");
};

closes.onclick = () => {
  modal.style.display = "none";
  wrapper.classList.remove("modal-wrapper");
};

window.onclick = (event) => {
  if (event.target == wrapper) {
    modal.style.display = "none";
    wrapper.classList.remove("modal-wrapper");
  }
};
