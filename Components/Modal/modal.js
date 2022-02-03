var btn = document.getElementById("btn");
var closes = document.getElementById("close");
var modal = document.getElementById("modal-content");
var wrapper = document.getElementById("wrapper");

btn.onclick = () => {
  modal.style.display = "flex";
  wrapper.classList.add("wrapper");
};

closes.onclick = () => {
  modal.style.display = "none";
  wrapper.classList.remove("wrapper");
};

window.onclick = (event) => {
  if (event.target == wrapper) {
    modal.style.display = "none";
    wrapper.classList.remove("wrapper");
  }
};
