const nav = document.getElementById("nav");
const open_nav = document.getElementById("open-nav");
const close_nav = document.getElementById("close-nav");

// close_nav.onclick = () => (nav.style.width = "0");

open_nav.onclick = () => {
  if (nav.style.width === "0px" || nav.style.width == 0) {
    nav.style.width = "15rem";
    console.log(nav.style.width);
  } else {
    nav.style.width = "0px";
    console.log(nav.style.width);
  }
};

window.onresize = () => {
  if (window.innerWidth >= 800) {
    nav.style.width = "15rem";
  } else {
    nav.style.width = "0px";
  }
};
