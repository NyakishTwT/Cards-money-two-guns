import { modal } from './script.js'
let CardCorr = null

// Функция для добавления модального окна при нажатии кнопки Редактировать 
function addModal(e) {
    const btn = e.target.closest('button')
    if (btn && btn.classList.contains('correction')) {
        modal.classList.add('show')

        const card = btn.closest('.card')
        CardCorr = card

        document.getElementById('title').value = card.querySelector('.record').textContent
        document.getElementById('image').value = card.querySelector('.pic').src
        document.getElementById('description').value = card.querySelector('.text').textContent
    }
}

// Функция для закрытия модального окна
function closeModal() {
    modal.classList.remove('show')
    CardCorr = null
}
// Функция для закрытия модального окна вне модального окна
function closeModalAll(e) {
    if (e.target === modal) {
        modal.classList.remove('show')
        CardCorr = null
    }
}

export { CardCorr, addModal, closeModal, closeModalAll }