const btn = document.getElementsByClassName("jsbtn");
const alert = document.getElementsByClassName("jsalert");
const reset = document.getElementById("reset");

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = () => (alert[i].style.display = "none");
}

reset.onclick = () => {
  for (let i = 0; i < btn.length; i++) {
    alert[i].style.display = "flex";
  }
};
