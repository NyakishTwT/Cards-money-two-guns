import '../styles/styles.css'
import sc2 from '../assets/Images/sc2.png'
import eu4 from '../assets/Images/eu4.png'
import guitar from '../assets/Images/guitara.png'
import { addModal, closeModal, closeModalAll, } from './modal.js'
import { sendForm } from './sendForm.js'
import { AddCard } from './AddCard.js'
// Импорты вверху 

// Переменные тоже вверху
let addButton = document.getElementById('FatonBaton')
let template = document.getElementById('content')
const closeBtn = document.querySelector('.close')
const form = document.querySelector('.modal-content')
const modal = document.getElementById('myModal')
const cardsData = [
  {
    record: 'Starcraft 2 top mmr',
    image: sc2,
    text: 'К сожалению я уже забросил эту игру довольно давно, но в прошлом я занимал топ даймонд лиги, так и не добравшись до мастер лиги,игра требует высокого порога входа, заучивание планов на игру, высокой скорости игры, готовности адаптироваться под соперника, по себе является одной из лучших стратегий, пусть даже и довольно старой'
  },
  {
    record: 'Больше всего часов',
    image: eu4,
    text: 'Игра, в которую я наиграл большее количество часов, представляет собой реиграбельную стратегию в реальном времени, где можно с 15 века довести выбранную страну до чего хочешь'
  },
  {
    record: 'Больше 2 лет игры на гитаре',
    image: guitar,
    text: 'Гитара является одним из фаворитов из всех хобби, и самым частым, самым незаброшеным и стабильным, моя первая песня перебором: "Город золотой"'
  }
]

// Эти карточки я создаю заранее из моего массива
function createCards() {
  cardsData.forEach(data => {
    const clone = template.content.cloneNode(true)
    clone.querySelector('.record').textContent = data.record
    clone.querySelector('.pic').src = data.image
    clone.querySelector('.text').textContent = data.text

    function like() {
      this.classList.toggle('likesActives')
    }

    clone.querySelector('.like_but').addEventListener('click', like)

    function del() {
      this.closest('.card').remove()
    }

    clone.querySelector('.delete_but').addEventListener('click', del)

    template.appendChild(clone)
  })
}
// Потом вызываю эту функцию
createCards()



// Добавление карточки
addButton.addEventListener('click', AddCard)

//Добавление модалки
document.body.addEventListener('click', addModal)
// Закрытие модального окна
closeBtn.addEventListener('click', closeModal)
// Модальное окно закрывается, когда идет клик вне модального окна
window.addEventListener('click', closeModalAll)
// 
form.addEventListener('submit', sendForm)


// Экспорты внизу
export { modal, template }