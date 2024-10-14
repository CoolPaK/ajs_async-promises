import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load()
  .then((saving) => {
    console.log(saving); // работа с объектом GameSaving
  })
  .catch((error) => {
    console.error(error);
  });