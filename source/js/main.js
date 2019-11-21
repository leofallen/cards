
const menuList = document.querySelector('.menu');
const multuplayer = 'menu_list-item menu_list-item--mutiplayer';
const onePlayer = 'menu_list-item menu_list-item--oneplayer';
const rules = 'menu_list-item menu_list-item--rules';
const menuItemList = menuList.querySelectorAll('.menu_list-item');
const cardTemplate = document.querySelector('.card-template').content.querySelector('.cards-table_card');
const gameTable = document.querySelector('.cards-table');
const playerOneCards = gameTable.querySelector('.player-one');
const playerTwoCards = gameTable.querySelector('.player-two');


function getRandom(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const cardsTemplate = [
  'bear',
  'chick',
  'coala',
  'fox',
  'frog',
  'monkey',
  'panda',
  'pig',
  'tiger'
];

const cardsIcon = [
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
];

const gameDeck = [];

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

const moveCrads = function () {
    let number = getRandom(0, cardsIcon.length -1)
    shuffle(cardsIcon);
    gameDeck.push(cardsIcon[number]);
    cardsIcon.splice(number, 1);
};

function getStartGame() {
  shuffle(cardsTemplate);
  menuList.classList.add('hidden');
  moveCrads();

  for(let i = 0; i < 4; i++) {
    playerOneCards.appendChild(getCard(cardsTemplate[i]));
    playerTwoCards.appendChild(getCard(cardsTemplate[i + 4]));
  }

  gameTable.classList.remove('visually-hidden');
}

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


const getCard = function(icon) {
  const fragment = document.createDocumentFragment();
  const element = cardTemplate.cloneNode(true);
  element.querySelector('.cards-table_img').src = 'img/card-icon-' + icon + '.svg';
  element.querySelector('.cards-table_img').alt = icon;
  fragment.appendChild(element);
  return fragment;
};

const getCards = function () {
  shuffle(cardsIcon).forEach(function (it) {
    gameTable.appendChild(getCard(it));
  });
};

// повеление карт


