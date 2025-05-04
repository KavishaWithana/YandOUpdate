// Get elements
const openMenuIcon = document.getElementById("openMenuIcon");
const closeMenuIcon = document.querySelectorAll("#closeMenuIcon");
const openedMenu = document.getElementById("openedMenu");
const productsPanel = document.getElementById("about-panel");

// Toggle menu visibility
openMenuIcon.addEventListener("click", () => {
  openedMenu.classList.remove("hidden");
  openMenuIcon.classList.add("hidden");
});

// Close all panels when any close icon is clicked
closeMenuIcon.forEach((closeIcon) => {
  closeIcon.addEventListener("click", () => {
    openedMenu.classList.add("hidden");
    productsPanel.classList.add("translate-x-full");
    openMenuIcon.classList.remove("hidden");
  });
});

// Get the elements
const productsBtn = document.getElementById("products-btn");
const backBtn = document.getElementById("back-btn");

// Event listener for opening the products panel
productsBtn.addEventListener("click", () => {
  productsPanel.classList.remove("translate-x-full");
  productsPanel.classList.add("translate-x-0");
});

// Event listener for navigating back to the main menu
backBtn.addEventListener("click", () => {
  productsPanel.classList.remove("translate-x-0");
  productsPanel.classList.add("translate-x-full");
});
