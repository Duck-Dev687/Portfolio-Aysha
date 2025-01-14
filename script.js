const menuIcon = document.querySelector('#menu-icon')

const navbar= document.querySelector('.navbar')

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Remove `#`
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

