import { closeModal, CardCorr } from './modal.js'
// Функция для отправки формы в модальном окне
function sendForm(e) {
    e.preventDefault()

    const title = document.getElementById('title').value
    const imgSrc = document.getElementById('image').value
    const description = document.getElementById('description').value


    if (CardCorr) {
        CardCorr.querySelector('.record').textContent = title
        CardCorr.querySelector('.pic').src = imgSrc
        CardCorr.querySelector('.text').textContent = description
    }
    closeModal()
}
export { sendForm }