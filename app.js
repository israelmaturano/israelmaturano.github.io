const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav_links');
  const navLinks = document.querySelectorAll('.nav_links li');
  //Toggle Nav
  burger.addEventListener('click', ()=> {
    nav.classList.toggle('nav_active');
    //Animate navLinks
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
  });
}

navSlide();
