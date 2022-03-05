const nav = document.getElementById("nav");
const open_nav = document.getElementById("open-nav");

open_nav.onclick = () => {
  if (nav.style.width === "0px" || nav.style.width == 0) {
    nav.style.width = "15rem";
  } else {
    nav.style.width = "0px";
  }
};

window.onresize = () => {
  if (window.innerWidth >= 800) {
    nav.style.width = "15rem";
  } else {
    nav.style.width = "0px";
  }
};
