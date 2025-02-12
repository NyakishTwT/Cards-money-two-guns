let addButton = document.getElementById('FatonBaton')
let inputRecord = document.getElementById('inputRecord')
let inputPicture = document.getElementById('inputPicture')
let inputText = document.getElementById('inputText')
let template = document.getElementById('content')
const cardsData = [
  {
    record: 'Starcraft 2 top mmr',
    image: 'assets/Images/sc2.png',
    text: 'К сожалению я уже забросил эту игру довольно давно, но в прошлом я занимал топ даймонд лиги, так и не добравшись до мастер лиги,игра требует высокого порога входа, заучивание планов на игру, высокой скорости игры, готовности адаптироваться под соперника, по себе является одной из лучших стратегий, пусть даже и довольно старой'
  },
  {
    record: 'Больше всего часов',
    image: 'assets/Images/eu4.png',
    text: 'Игра, в которую я наиграл большее количество часов, представляет собой реиграбельную стратегию в реальном времени, где можно с 15 века довести выбранную страну до чего хочешь'
  },
  {
    record: 'Больше 2 лет игры на гитаре',
    image: 'assets/Images/guitara.png',
    text: 'Гитара является одним из фаворитов из всех хобби, и самым частым, самым незаброшенным и стабильным, моя первая песня перебором: "Город золотой"'
  }
]


function createCards() {
  cardsData.forEach(data => {
    const clone = template.content.cloneNode(true)
    clone.querySelector('.record').textContent = data.record
    clone.querySelector('.pic').src = data.image
    clone.querySelector('.text').textContent = data.text

    clone.querySelector('.like_but').addEventListener('click', function () {
      this.classList.toggle('likesActives')
    })

    clone.querySelector('.delete_but').addEventListener('click', function () {
      this.closest('.card').remove()
    })

    template.appendChild(clone)
  })
}

createCards()


function createCard(record, image, text) {
  const clone = template.content.cloneNode(true)
  clone.querySelector('.record').textContent = record
  clone.querySelector('.pic').src = image
  clone.querySelector('.text').textContent = text


  clone.querySelector('.like_but').addEventListener('click', function () {
    this.classList.toggle('likesActives')
  })

  clone.querySelector('.delete_but').addEventListener('click', function () {
    this.closest('.card').remove()
  })
  return clone
}
addButton.addEventListener('click', function () {
  const newCard = createCard(inputRecord.value, inputPicture.value, inputText.value)
  template.appendChild(newCard)
  inputRecord.value = ''
  inputPicture.value = ''
  inputText.value = ''
});