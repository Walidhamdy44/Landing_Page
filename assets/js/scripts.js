// Add event listener to the menu button to open the side menu
document.getElementById("menu-button").addEventListener("click", function () {
  // Set the left position of the side menu to 0 to make it visible
  document.getElementById("side-menu").style.left = "0";
});

// Add event listener to the close button to close the side menu
document.getElementById("close-btn").addEventListener("click", function () {
  // Set the left position of the side menu to -100% to hide it
  document.getElementById("side-menu").style.left = "-105%";
});
//
