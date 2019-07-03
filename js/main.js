const navLink = document.querySelectorAll('.nav-link');

navLink.addEventListener('click', function () {
    const headerContainer = document.querySelector('.header-container');
    headerContainer.classList.toggle('header-container__active');
    
});