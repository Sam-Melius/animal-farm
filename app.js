// import functions and grab DOM elements
const catPic = document.getElementById ('cat');
const catSound = document.getElementById ('meow');

const dogPic = document.getElementById ('dog');
const dogSound = document.getElementById ('bark');

const horsePic = document.getElementById ('horse');
const horseSound = document.getElementById ('neigh');

const clickedOnEl = document.getElementById ('clicked-on');
// initialize global state

// set event listeners 
catPic.addEventListener('click', () => {
  catSound.play();
  clickedOnEl.textContent ='cat';
});

dogPic.addEventListener('click', () => {
  dogSound.play();

  clickedOnEl.textContent ='dog';
});

horsePic.addEventListener('click', () => {
  horseSound.play();

  clickedOnEl.textContent ='horse';
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
