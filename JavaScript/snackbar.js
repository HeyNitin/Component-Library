const close = document.getElementsByClassName("jsclose");
const snackbar = document.getElementsByClassName("jssnackbar");
const retry = document.getElementsByClassName("jsretry");
const reset = document.getElementById("jsreset");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = () => (snackbar[i].style.display = "none");
}

for (let i = 0; i < retry.length; i++) {
  retry[i].onclick = () => (document.location.href = "snackbar.html");
}

reset.onclick = () => (snackbar[0].style.display = "flex");
