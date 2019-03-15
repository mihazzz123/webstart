// Переменные
var button = document.querySelector('#button');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('#close-btn')

function openModal() {
  modal.classList.add('modal-active');
};

function closeModal() {
  modal.classList.remove('modal-active');
};

button.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

setInterval(closeModal, 5000);
