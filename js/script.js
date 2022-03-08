document.getElementsByClassName("toggler-navbar")[0].addEventListener("click", toggleClass);

function toggleClass() {
    document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open')
    document.getElementsByClassName("sidebar")[0].classList.toggle('open')
}
