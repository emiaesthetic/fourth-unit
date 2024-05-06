'use strict';

(() => {
  const RU_DICTIONARY = {
    winnerLoserFigures: {
      камень: 'ножницы',
      ножницы: 'бумага',
      бумага: 'камень',
    },
    computerName: 'Компьютер',
    playerName: 'Игрок',
    messageTotalResult: 'Результаты игры',
    messageCloseGame: 'Завершить игру?',
    messageContinueGame: 'Еще?',
    messageLose: 'Победил компьютер',
    messageDraw: 'Ничья',
    messageWins: 'Вы победили',
  };

  const ENG_DICTIONARY = {
    winnerLoserFigures: {
      rock: 'scissors',
      scissors: 'paper',
      paper: 'rock',
    },
    computerName: 'Computer',
    playerName: 'Player',
    messageTotalResult: 'Game results',
    messageCloseGame: 'Close the game?',
    messageContinueGame: 'Yet?',
    messageLose: 'Computer wins',
    messageDraw: 'Draw',
    messageWins: 'You win',
  };

  const getRandomIntInclusive = (min, max) =>
    Math.floor(min + Math.random() * (max - min + 1));

  const getRandomFigure = (figures) => {
    const randomIndex = getRandomIntInclusive(0, figures.length - 1);
    return figures[randomIndex];
  };

  const makeChoice = (figures) => {
    const message = figures.join(', ');
    const choice = prompt(message);

    if (choice === null) return null;

    const compareChoice = figures.find(
        (item) => choice && item.startsWith(choice.toLowerCase()),
    );
    return compareChoice ?? makeChoice(figures);
  };

  const game = (language = 'RU') => {
    const result = {
      playerScore: 0,
      computerScore: 0,
    };

    const dictionary =
      language === 'EN' || language === 'ENG' ? ENG_DICTIONARY : RU_DICTIONARY;

    return function startGame() {
      const figures = Object.keys(dictionary.winnerLoserFigures);
      const computerChoice = getRandomFigure(figures);
      const playerChoice = makeChoice(figures);

      const continueGame = () =>
        (confirm(dictionary.messageContinueGame) ? startGame() : exitGame());

      const exitGame = () => {
        message = `
        ${dictionary.messageTotalResult}:
          ${dictionary.computerName}: ${result.computerScore},
          ${dictionary.playerName}: ${result.playerScore}.
        `;

        return alert(message);
      };

      if (playerChoice === null) {
        const closeGame = confirm(`${dictionary.messageCloseGame}?`);

        if (!closeGame) return startGame();
        exitGame();
      }

      let message = `
        ${dictionary.computerName}: ${computerChoice}
        ${dictionary.playerName}: ${playerChoice}
      `;

      if (computerChoice === playerChoice) {
        alert(`${message}
          ${dictionary.messageDraw}...`);
        continueGame();
      } else if (
        playerChoice === dictionary.winnerLoserFigures[computerChoice]
      ) {
        result.computerScore += 1;
        alert(`${message}
          ${dictionary.messageLose}...`);
        continueGame();
      } else {
        result.playerScore += 1;

        alert(`${message}
          ${dictionary.messageWins}!`);
        continueGame();
      }
    };
  };

  window.RPS = game;
})();
