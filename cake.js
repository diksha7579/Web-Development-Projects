const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const cartIcon = document.querySelector(".cart-icon");
const cartItemsContainer = document.querySelector(".cart-items-container");

// Toggle search form
searchIcon.addEventListener("click", () => {
  searchForm.classList.toggle("active"); // changed from add() to toggle()
  cartItemsContainer.classList.remove("active");
  navbar.classList.remove("active");
});

// Toggle menu (navbar)
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active"); // changed from add() to toggle()
  cartItemsContainer.classList.remove("active");
  searchForm.classList.remove("active");
});

// Toggle cart
cartIcon.addEventListener("click", () => {
  cartItemsContainer.classList.toggle("active"); // changed from add() to toggle()
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
});

window.onscroll= ()=>{
  cartItemsContainer.classList.remove("active"); // changed from add() to toggle()
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
}
// Optional: remove cart items on "x" click
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.closest(".cart-item").remove();
  }
});
// Prevent page reload on "add to cart" and other .btn links
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    // You can add your custom add-to-cart logic here
  });
});

