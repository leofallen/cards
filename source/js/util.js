export const CARDS_DIVERSITY = 9;
const KEYS = {
  esc: '27',
  enter: '13',
  space: '32'
};

export const getRandom =(min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const shuffle = function (arr) {
  let j = '';
  let temp = '';
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};


