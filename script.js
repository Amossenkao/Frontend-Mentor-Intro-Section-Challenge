
const features = document.querySelector('a.features');
const company = document.querySelector('a.company');
const menuToggle = document.querySelector('.menu');
const closeToggle = document.querySelector('.close');
const navMenu = document.querySelector('nav');
const elements = [features, company];
const toggleButtons = [menuToggle, closeToggle];

elements.forEach((element) => {
  const subMenu = element.parentElement.querySelector('.sub-menu');
  const arrow = element.parentElement.querySelector('.arrow-down');
  element.addEventListener('click', () => {
    subMenu.classList.toggle('shown-mobile');
    arrow.classList.toggle('arrow-down');
    arrow.classList.toggle('arrow-up');
    if (arrow.classList.contains('arrow-up')) {
      arrow.src = "images/icon-arrow-up.svg";
    } else {
      arrow.src = "images/icon-arrow-down.svg";
    }
  });

  element.parentElement.addEventListener('mouseover', () => {
    element.nextElementSibling.classList.add('desktop-shown');
    element.getElementsByTagName('img')[0].src = "images/icon-arrow-up.svg";
  })

  element.parentElement.addEventListener('mouseout', () => {
    element.nextElementSibling.classList.remove('desktop-shown');
    element.getElementsByTagName('img')[0].src = "images/icon-arrow-down.svg";
  })
})

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
  button.classList.toggle('active');
    try {
    button.previousElementSibling.classList.toggle('active');
    } catch {
      
  }
  button.nextElementSibling.classList.toggle('active');
  navMenu.classList.toggle('shown');
  document.body.classList.toggle('expanded-menu');
  })

})

