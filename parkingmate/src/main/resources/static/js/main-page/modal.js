
// 모달창
let popup = document.querySelector('.parkingmate-modal-container');
let modal = document.querySelector('.parkingmate-close-button');
let body = document.querySelector('body');

modal.addEventListener('click',() =>{
    popup.style.display = 'none';
    body.style.overflow = 'auto';
})