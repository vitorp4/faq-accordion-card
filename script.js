let accordions = document.querySelectorAll('.accordion-title');
accordions.forEach((el) => {
  el.addEventListener('click', () => {
    accordions.forEach((el2) => {
      if (el !== el2) el2.parentElement.classList.remove('show');
    });

    el.parentElement.classList.toggle('show');
  })
})