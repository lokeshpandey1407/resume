const VerticleNavbarComponent = document.querySelector("#header_menu");
const NavbarButtonComponent = document.querySelector("#slide-menu");
const NameContainer = document.querySelector(".text-container");
const MoveToTopButon = document.querySelector("#move-to-top");

function handleToggleNavbar() {
  VerticleNavbarComponent.classList.toggle("slide-down");
  NavbarButtonComponent.classList.toggle("fa-angles-up");
  NameContainer.classList.toggle("slide-text-down");
}

const NavbarLinks = VerticleNavbarComponent.querySelectorAll("a");

NavbarLinks.forEach((link) => {
  handleNavbarLinkClick(link);
});
function handleNavbarLinkClick(link) {
  link.addEventListener("click", () => {
    if (VerticleNavbarComponent.classList.contains("slide-down")) {
      handleToggleNavbar();
    }
  });
}

function handleMoveToTop() {
  window.scroll(0, 0);
}
MoveToTopButon.addEventListener("click", handleMoveToTop);
NavbarButtonComponent.addEventListener("click", handleToggleNavbar);
