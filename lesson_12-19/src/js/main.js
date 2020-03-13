document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const page = document.querySelector('.hero');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.classList.remove('modal--visible');
    }
  }

  window.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
      if (modal.classList.contains('modal--visible')) {
        modal.classList.toggle('modal--visible');
      }
    }
  })


})