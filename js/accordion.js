


$(document).ready(function () {

  const accordions = document.getElementsByClassName('accordion-heading');

  for (const acc of accordions) {
    acc.addEventListener('click', function () {
      const body = this.nextElementSibling;
      body.classList.toggle('open');
      const indication = this.querySelector('.state-indication');
      if (indication.classList.contains('plus')) {
        indication.classList.remove('plus');
        indication.classList.add('minus');
      } else if (indication.classList.contains('minus')) {
        indication.classList.remove('minus');
        indication.classList.add('plus');
      }
    });
  }


});
