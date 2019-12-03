import {gameTable} from './start-game.js';
import {pointerCoordsToggle} from './hidden-cards.js';

let pointerCoords = 0;
const pointer = gameTable.querySelector('.cards-table_pointer');

const movePointerDown = () => {
  if (pointerCoords > 455) {
    return true;
  }
  pointerCoords += 5;
  pointer.style.top = pointerCoords + 'px';
  setTimeout(movePointerDown, 6);
};

 const movePointerUp = () => {
  if (pointerCoords < 5) {
    return true;
  }
  pointerCoords -=5;
  pointer.style.top = pointerCoords + 'px';
  setTimeout(movePointerUp, 6);
}

export const movePointer = () => {

  if (pointerCoordsToggle.one) {
    movePointerDown();
  } else if (!pointerCoordsToggle.one)
    movePointerUp();
};
