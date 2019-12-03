import {CARDS_DIVERSITY, shuffle} from './util.js';

const menuList = document.querySelector('.menu');
const multuplayer = 'menu_list-item menu_list-item--mutiplayer';
const onePlayer = 'menu_list-item menu_list-item--oneplayer';
const rules = 'menu_list-item menu_list-item--rules';
const menuItemList = menuList.querySelectorAll('.menu_list-item');
const cardTemplate = document.querySelector('.card-template')
.content.querySelector('.cards-table_card');
export const gameTable = document.querySelector('.cards-table');
const playerOne = gameTable.querySelector('.player-one');
const playerTwo = gameTable.querySelector('.player-two');

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

export let gameCards = []; // масиив в который копируется изначальный масив карт
export const gameDeck = []; // временный массив для операций с картами
export const playerOneBank = [];
export const playerTwoBank = [];

// раздает по четыре случайные, неповторяющиеся карты игрокам
const getStartGame = () => {
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
menuItemList.forEach((it) => {
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
const getCard = (icon) => {
  const fragment = document.createDocumentFragment();
  const element = cardTemplate.cloneNode(true);
  element.querySelector('.cards-table_img').src = 'img/card-icon-' + icon + '.svg';
  element.querySelector('.cards-table_img').alt = icon;
  element.classList.add('cards-table_card--' + icon);
  fragment.appendChild(element);
  return fragment;
};
