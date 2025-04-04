import { template, } from "./script.js"

// Функция создает новую карточку
function createCard(record, image, text) {
    const clone = template.content.cloneNode(true)
    clone.querySelector('.record').textContent = record
    clone.querySelector('.pic').src = image
    clone.querySelector('.text').textContent = text

    function LikeAktiv() {
        this.classList.toggle('likesActives')
    }
    // Актив кнопки лайка
    clone.querySelector('.like_but').addEventListener('click', LikeAktiv)

    function RemoveCard() {
        this.closest('.card').remove()
    }
    // Удаление карты
    clone.querySelector('.delete_but').addEventListener('click', RemoveCard)
    return clone
}


// Функция добавляет карточку на страницу и очищает поля ввода инпутов
function AddCard() {
    const newCard = createCard(inputRecord.value, inputPicture.value, inputText.value)
    template.appendChild(newCard)
    inputRecord.value = ''
    inputPicture.value = ''
    inputText.value = ''
}
export { AddCard, createCard }