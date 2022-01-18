const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

document.getElementById('txtInquiry').style.height="300px";
document.getElementById('txtInquiry').style.width="300px";
document.getElementById('txtInquiry').style.fontSize="14pt";