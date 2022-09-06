let cl = console.log;

const toggleBtn = document.getElementById('toggleBtn');
const navbarUl = document.querySelector('.navbar ul');

const navbarToggle = (e) => {
    navbarUl.classList.toggle('show')
}






toggleBtn.addEventListener('click' , navbarToggle)