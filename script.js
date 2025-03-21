const navbar = document.getElementById("navbar");
const openButton = document.getElementById("open-sidebar-button");
const media = window.matchMedia("(width < 700px)");
const body = document.querySelectorAll("body");

media.addEventListener("change", (e) => updateNavbar(e));

function updateNavbar(e) {
  const isMobile = e.matches;
  console.log(isMobile);
  if (isMobile) {
    navbar.setAttribute("inert", "");
  } else {
    navbar.removeAttribute("inert");
  }
}

function openSidebar() {
  navbar.classList.add("show");
  navbar.removeAttribute("inert"); // <-- Add this line
  openButton.setAttribute("aria-expanded", "true");
}

function closeSidebar() {
  navbar.classList.remove("show");
  openButton.setAttribute("aria-expanded", "false");
  navbar.setAttribute("inert", "");
}

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeSidebar();
  });
});

updateNavbar(media);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navbar.classList.contains("show")) {
    closeSidebar();
  }
});
