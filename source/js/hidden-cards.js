import {gameTable, gameCards, playerOneBank, playerTwoBank} from './start-game.js';
import {getRandom} from './util.js';
import {movePointer} from './pointer.js';


const coincidencePopup = document.querySelector('.coincidence-popup');
const switchPopup = document.querySelector('.switch-player-popup');
// const coincidencePopupBlock = document.querySelector('.coincidence-popup_block');
// const overlay = document.querySelectorAll('.overlay');
// const hiddenCard = document.querySelector('.cards-table_card');
const switchPlayerText = switchPopup.querySelector('.switch-player-popup_discription');
let playerOneCards = gameTable.querySelector('.player-one').children;
let playerTwoCards = gameTable.querySelector('.player-two').children;

// закрытие оверлеев по клику на пустой области
// overlay.forEach((it) => {
//   it.addEventListener('click', function (evt) {
//     if (evt.target === it) {
//       it.classList.add('visually-hidden');
//       hiddenCards.forEach(function (it) {
//         it.classList.add('card-table--shirt');
//         it.querySelector('img').src = '';
//       });
//     }
//   });
// });

// const closePopup = () => {
//   coincidencePopup.classList.add('visually-hidden');
//   hiddenCards.forEach(function (it) {
//     it.classList.add('card-table--shirt');
//     it.querySelector('img').src = '';
//   });
// };

const showPopup = (popup) => {
  popup.classList.remove('visually-hidden');
  function popapRemove() {
    popup.classList.add('visually-hidden');
    coincidencePopup.classList.add('visually-hidden');
    hiddenCards.forEach(function (it) {
      it.classList.add('card-table--shirt');
      it.querySelector('img').src = '';
    });
  }
  setTimeout(popapRemove, 1000)
};

// меняет значение счетчика на картах
const countCard = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    let alt = arr[i].querySelector('.cards-table_img').alt;
    let count = arr[i].querySelector('.cards-table_card-count');
    if (alt === element) {
      let num = Number(count.textContent)
      count.textContent = num += 1;
    }
  }
};

// проверяет есть ли сопадения карт
const cardsCoincidence = (icon, arr, element) => {
  if (arr.includes(icon)) {
    showPopup(coincidencePopup);
    arr.push(icon);
    countCard(playersCards.active, icon);
    cardAnimation(icon, element);
  } else {
    switchPlayer();
    movePointer();
    switchPlayerText.textContent = switchDescription.one;
    showPopup(switchPopup);
  }
};

// возвращает случайный элемент массива с картами
const ramdomElement = () => {
  let number = getRandom(0, gameCards.length -1);
  let element = gameCards[number];
  gameCards.splice(number, 1);

  return element;
};

const hiddenCards = gameTable.querySelector('.cards-table_deck')
.querySelectorAll('.cards-table_card');

let players = {
  active: playerOneBank,
  disactive: playerTwoBank
};

let playersCards = {
  active: playerOneCards,
  disactive: playerTwoCards
};

let switchDescription = {
  one: 'ход переходит к игроку номер 1',
  two: 'ход переходит к игроку номер 2'
};

export let pointerCoordsToggle = {
  one: false,
  two: true
};



const switchPlayer = () => {
  let {active: one, disactive: two} = players;
  players = {active: two, disactive: one};
  let {active: first, disactive: second} = playersCards;
  playersCards = {active: second, disactive: first};
  let {one: frst, two: scnd} = switchDescription;
  switchDescription = {one: scnd, two: frst};
  let {one: down, two: up} = pointerCoordsToggle;
  pointerCoordsToggle = {one: up, two: down};
};

const onCardClick = (evt) => {
  let element = evt.target;
  let icon = ramdomElement(); // этот элемент надо добавить в масив игрока если есть совпадение иначе выкинуть
  element.querySelector('.cards-table_img').src = 'img/card-icon-'+ icon +'.svg';
  element.classList.remove('card-table--shirt');
  cardsCoincidence(icon, players.active, element);
};

hiddenCards.forEach((it) => {
  it.addEventListener('click', onCardClick);
});

// добавление миксина с анимацией для совпавших карт
const cardAnimation = (icon, element) => {
  let imgHidenCard = element.querySelector('.cards-table_img');
  let cardCount = gameTable.querySelector('.cards-table_card--'+icon+'')
  .querySelector('.cards-table_card-count');
  let imgPlayerCard = gameTable.querySelector('.cards-table_card--'+icon+'')
  .querySelector('img');
  imgPlayerCard.classList.add('img-animation-mixin');
  imgHidenCard.classList.add('img-animation-mixin');
  cardCount.classList.add('img-animation-mixin');
  function removeAnimation() {
    imgPlayerCard.classList.remove('img-animation-mixin')
    imgHidenCard.classList.remove('img-animation-mixin')
    cardCount.classList.remove('img-animation-mixin')
  }
  setTimeout(removeAnimation, 1000);
}

