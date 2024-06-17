const paginationBtn = document.querySelectorAll('.pagination__link');
const path = document.location.pathname.split('.')[0].replace('/', '').split('-')[1];

paginationBtn.forEach((el) => {
  el.classList.remove('active');
  if (el.innerHTML === path) {
    el.classList.add('active');
  }
  })

