let navLink = document.getElementsByClassName('nav-link');

navLink.addEventListener('click', function () {
    this.classList.toggle('nav-link__deactivated');
});