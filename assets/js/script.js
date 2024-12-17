// Functionality For Footer Section
let footIconBox = document.querySelectorAll('.footer-icon-row .footer-icon');
let footIcon = document.querySelectorAll('.footer-icon-row .footer-icon i');

footIconBox.forEach((box, i) => {
    box.addEventListener('mouseenter', () => {
        footIcon[i].style.color = '#0166fe';
    })
    box.addEventListener('mouseleave', () => {
        footIcon[i].style.color = '#fff';
    })
})

// ----------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Back to Top Btn
let backToTopDiv = document.querySelector(".back-to-top");
let backToTopBtn = document.querySelector(".back-to-top .fa-arrow-up");

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Adjust the pixel value as needed
    backToTopDiv.classList.add("show");
  } else {
    backToTopDiv.classList.remove("show");
  }
});

// -------------------------------------------------------------------------------------------------------------------------------------

// Functionality for Gallery Page Image Hover
const galleryImgBoxes = document.querySelectorAll('.gallery-img');

// Loop through each gallery image
galleryImgBoxes.forEach(box => {
    const layer = box.querySelector('.layer');

    // On mouse enter, slide the layer up
    box.addEventListener('mouseenter', () => {
        layer.style.top = '0'; // Slide the layer to the top
    });

    // On mouse leave, slide the layer back down
    box.addEventListener('mouseleave', () => {
        layer.style.top = '100%'; // Reset the layer's position
    });
});

// -------------------------------------------------------------------------------------------------------------------------------------


// Functionality For Warranty Page Checkbox
document.addEventListener("DOMContentLoaded", function() {
  const termsCheckbox = document.getElementById("terms-checkbox");
  const modal = new bootstrap.Modal(document.getElementById("termsModal"));
  const agreeButton = document.getElementById("agree-btn");

  // Prevent checkbox toggle and open the modal
  termsCheckbox.addEventListener("click", function(e) {
      if (termsCheckbox.checked) { 
          e.preventDefault(); // Stop the checkbox from toggling immediately
          modal.show(); // Show the modal
      }
  });

  // On "I Agree" button click, check the checkbox
  agreeButton.addEventListener("click", function() {
      termsCheckbox.checked = true;
  });
});
