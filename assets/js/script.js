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