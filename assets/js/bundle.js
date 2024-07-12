// :: snippet to set the gap value

// Get all elements with the attributes "data-gap-x" or "data-gap-y"
let elements = document.querySelectorAll('[data-gap-x], [data-gap-y]');

// Loop through each element
elements.forEach(element => {
  // Get the value of the "data-gap-x" and "data-gap-y" attributes
  let gapXValue = element.getAttribute('data-gap-x');
  let gapYValue = element.getAttribute('data-gap-y');

  // Check if the element has only the "data-gap-x" attribute
  if (gapXValue && !gapYValue) {
    // Set the CSS "gap" property using the value of "data-gap-x"
    element.style.columnGap = gapXValue;
  }

  // Check if the element has only the "data-gap-y" attribute
  if (gapYValue && !gapXValue) {
    // Set the CSS "gap" property using the value of "data-gap-y"
    element.style.rowGap = gapYValue;
  }

  // Check if the element has both the "data-gap-x" and "data-gap-y" attributes
  if (gapXValue && gapYValue) {
    // Set the CSS "gap" property using the values of "data-gap-x" and "data-gap-y"
    element.style.columnGap = gapXValue;
    element.style.rowGap = gapYValue;
  }
});
/* --------------------------------------------------------------------- */

// User menu
document.getElementById('user-btn').addEventListener('click', function() {
  document.getElementById('user-menu').classList.toggle('active');
});

// Hide (#user-menu) when clicking outside
document.addEventListener('mouseup', function(e) {
  const userMenu = document.getElementById('user-menu');
  if (!userMenu.contains(e.target)) {
    userMenu.classList.remove('active');
  }
});
/* --------------------------------------------------------------------- */

// Get references to the elements
var toggleButton = document.getElementById('sidebar-toggle');
var bodyElement = document.body;

// Add event listener to the toggle button
toggleButton.addEventListener('click', function() {
  // Toggle the 'sidebar-active' class on the body element
  bodyElement.classList.toggle('sidebar-active');
});
/* --------------------------------------------------------------------- */