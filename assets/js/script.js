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