const CARDS_DIVERSITY = 9;
const KEYS = {
  esc: '27',
  enter: '13',
  space: '32'
}


const menuList = document.querySelector('.menu');
const multuplayer = 'menu_list-item menu_list-item--mutiplayer';
const onePlayer = 'menu_list-item menu_list-item--oneplayer';
const rules = 'menu_list-item menu_list-item--rules';
const menuItemList = menuList.querySelectorAll('.menu_list-item');
const cardTemplate = document.querySelector('.card-template')
.content.querySelector('.cards-table_card');
const gameTable = document.querySelector('.cards-table');
const playerOne = gameTable.querySelector('.player-one');
const playerTwo = gameTable.querySelector('.player-two');
let playerOneCards = gameTable.querySelector('.player-one').children;
let playerTwoCards = gameTable.querySelector('.player-two').children;


function getRandom(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const cards = [
  'bear',
  'chick',
  'coala',
  'fox',
  'frog',
  'monkey',
  'panda',
  'pig',
  'tiger',
  'bear',
  'chick',
  'coala',
  'fox',
  'frog',
  'monkey',
  'panda',
  'pig',
  'tiger',
  'bear',
  'chick',
  'coala',
  'fox',
  'frog',
  'monkey',
  'panda',
  'pig',
  'tiger',
  'bear',
  'chick',
  'coala',
  'fox',
  'frog',
  'monkey',
  'panda',
  'pig',
  'tiger'
]; // изначальный массив карт

let gameCards = []; // масиив в который копируется изначальный масив карт
const gameDeck = []; // временный массив для операций с картами
const playerOneBank = [];
const playerTwoBank = [];
let player = playerOneBank; // игрок который ходит

const shuffle = function (arr) {
  let j = '';
  let temp = '';
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// раздает по четыре случайные, неповторяющиеся карты игрокам
function getStartGame() {
  gameCards = cards.slice();
  gameCards.splice(0, CARDS_DIVERSITY).forEach(function(it){
    gameDeck.push(it);
  });

  shuffle(gameDeck);
  menuList.classList.add('visually-hidden');

  for(let i = 0; i < 4; i++) {
    playerOne.appendChild(getCard(gameDeck[i]));
    playerOneBank.push(gameDeck[i]);
    playerTwo.appendChild(getCard(gameDeck[i + 4]));
    playerTwoBank.push(gameDeck[i +4]);
  }

  gameCards.push(gameDeck.pop());
  gameDeck.splice(0, gameDeck.length);
  gameTable.classList.remove('visually-hidden');
}

// навешивает события по клику на пункты меню
menuItemList.forEach(function(it) {
  it.addEventListener('click', function() {
    if (it.className === multuplayer) {
      getStartGame();
    } else if (it.clasName = onePlayer) {
      console.log(it.className);
    } else if (it.className === rules) {
      console.log(it.className);
    }
  })
});

// создает случайную карту
const getCard = function(icon) {
  const fragment = document.createDocumentFragment();
  const element = cardTemplate.cloneNode(true);
  element.querySelector('.cards-table_img').src = 'img/card-icon-' + icon + '.svg';
  element.querySelector('.cards-table_img').alt = icon;
  fragment.appendChild(element);
  return fragment;
};



// поведение скрытых карт

const coincidencePopup = document.querySelector('.coincidence-popup');
const switchPopup = document.querySelector('.switch-player-popup');
const coincidencePopupBlock = document.querySelector('.coincidence-popup_block');
const overlay = document.querySelectorAll('.overlay');
const hiddenCard = document.querySelector('.cards-table_card');
const switchPlayerText = switchPopup.querySelector('.switch-player-popup_discription');

// закрытие оверлеев по клику на пустой области
overlay.forEach(function (it) {
  it.addEventListener('click', function (evt) {
    if (evt.target === it) {
      it.classList.add('visually-hidden');
      hiddenCards.forEach(function (it) {
        it.classList.add('card-table--shirt');
        it.querySelector('img').src = '';
      });
    }
  });
});

function closePopup() {
  coincidencePopup.classList.add('visually-hidden');
  hiddenCards.forEach(function (it) {
    it.classList.add('card-table--shirt');
  });
};

function showPopup(popup) {
  popup.classList.remove('visually-hidden');
}

// меняет значение счетчика на картах
function countCard(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    alt = arr[i].querySelector('.cards-table_img').alt;
    count = arr[i].querySelector('.cards-table_card-count');
    if (alt === element) {
      let num = Number(count.textContent)
      count.textContent = num += 1;
    }
  }
};

// проверяет есть ли сопадения карт
function cardsCoincidence(card, arr, element) {
  if (arr.includes(card)) {
    showPopup(coincidencePopup);
    arr.push(element);
    countCard(playersCards.active, card);
  } else {
    switchPlayer();
    switchPlayerText.textContent = switchDescription.one;
    showPopup(switchPopup);
  }
};

// возвращает случайный элемент массива с картами
function ramdomElement() {
  number = getRandom(0, gameCards.length -1);
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
  one: 'ход переходит к игроку номер 2',
  two: 'ход переходит к игроку номер 1'
}

function switchPlayer() {
  let {active: one, disactive: two} = players;
  players = {active: two, disactive: one};
  let {active: first, disactive: second} = playersCards;
  playersCards = {active: second, disactive: first};
  let {one: frst, two: scnd} = switchDescription;
  switchDescription = {one: scnd, two: frst};

};

function onCardClick(evt) {
  let element = evt.target;
  let icon = ramdomElement(); // этот элемент надо добавить в масив игрока если есть совпадение иначе выкинуть
  element.querySelector('.cards-table_img').src = 'img/card-icon-'+ icon +'.svg';
  element.classList.remove('card-table--shirt');
  cardsCoincidence(icon, players.active, icon);
};

hiddenCards.forEach(function (it) {
  it.addEventListener('click', onCardClick);
});

