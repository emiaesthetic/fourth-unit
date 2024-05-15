'use strict';

(() => {
  const getPlayerNumber = (totalPoints) => {
    const message =
      totalPoints === 1 ?
        'У Вас остался 1 шар, выбор невелик... ' :
        `Введите число от 1 до ${totalPoints}: `;
    const userEntry = prompt(`Ваш ход. ${message}`, 1);

    if (userEntry === null) return null;

    if (!Number.isFinite(+userEntry)) {
      alert(`${userEntry} не является числом! ${message}`);
      return getPlayerNumber(totalPoints);
    } else if (+userEntry < 1 || +userEntry > totalPoints) {
      alert(`${userEntry} выходит за диапазон значений. ${message}`);
      return getPlayerNumber(totalPoints);
    } else {
      return +userEntry;
    }
  };

  const getRandomIntNumber = (min, max) =>
    Math.floor(min + Math.random() * (max - min + 1));

  const guessEvenOrOddNumber = (guesses) => {
    switch (guesses) {
      case 'player': {
        const guessPlayer = +confirm(
            'Бот выбрал число. Как думаете, он выбрал нечетное число?\n' +
            'OK - нечетное, Отмена - четное',
        );
        return guessPlayer;
      }

      case 'bot': {
        const guessBot = Math.round(Math.random());
        return guessBot;
      }

      default:
        break;
    }
  };

  const incrementScore = (target, count) => {
    const score = target + count > 10 ? 10 : target + count;
    return score;
  };

  const decrementScore = (target, count) => {
    const score = target - count < 0 ? 0 : target - count;
    return score;
  };

  const declinationBall = (count) =>
    (count === 1 ?
      `${count} шар` :
      count > 1 && count < 5 ?
      `${count} шара` :
      `${count} шаров`);

  const getFirstGuesses = () => {
    const getBotFigure = (figures) => {
      const randomIndex = getRandomIntNumber(0, figures.length - 1);
      return figures[randomIndex];
    };

    const getPlayerFigure = (figures) => {
      const message = figures.join(', ');
      const choice = prompt(`Выбирай: ${message}`);

      if (choice === null) {
        return confirm('Вы хотите выйти из игры?') ?
          'closeGame' :
          getFirstGuesses();
      }

      const compareChoice = figures.find(
          (item) => choice && item.startsWith(choice.toLowerCase()),
      );
      return compareChoice ?? getPlayerFigure(figures);
    };

    const winLoseFigures = {
      камень: 'ножницы',
      ножницы: 'бумага',
      бумага: 'камень',
    };
    const figures = Object.keys(winLoseFigures);

    const botChoice = getBotFigure(figures);
    const playerChoice = getPlayerFigure(figures);

    if (playerChoice === 'closeGame') return;

    console.log(`Игрок: ${playerChoice}\nБот: ${botChoice}`);

    if (botChoice === playerChoice) {
      alert('Ничья. Придется попробовать снова.');
      return getFirstGuesses();
    } else if (playerChoice === winLoseFigures[botChoice]) {
      alert('Бот начинает игру...');
      return 'player';
    } else {
      alert('Вы начинаете игру...');
      return 'bot';
    }
  };

  const game = () => {
    const gameScore = {
      player: 5,
      bot: 5,
    };

    return function startGame(guesses) {
      guesses ??= getFirstGuesses();

      const tryAgain = () => {
        const allMessages = [
          'Сыграем еще разок?',
          'Еще раз? Этот раз точно последний!',
          'Не хочешь еще раз попытать свою удачу?',
        ];

        const index = getRandomIntNumber(0, allMessages.length - 1);
        const message = allMessages[index];
        const answer = confirm(message);

        if (answer) {
          gameScore.player = 5;
          gameScore.bot = 5;
          return startGame();
        }
      };

      const closeOrContinueGame = (guesses) => {
        const answer = confirm('Вы хотите выйти из игры?');
        if (!answer) return startGame(guesses);
      };

      const endGameCheck = (guesses) => {
        if (gameScore.player <= 0) {
          alert('У Вас больше нет шаров. Вы самое слабое звено, прощайте...');
          tryAgain();
        } else if (gameScore.bot <= 0) {
          alert('Игра окончена. Поздравляем с победой!');
          tryAgain();
        } else startGame(guesses);
      };

      switch (guesses) {
        case 'bot': {
          const playerNumber = getPlayerNumber(gameScore.player);
          const botPresume = guessEvenOrOddNumber('bot');

          if (playerNumber === null) return closeOrContinueGame(guesses);

          if (playerNumber % 2 === botPresume) {
            gameScore.bot = incrementScore(gameScore.bot, playerNumber);
            gameScore.player = decrementScore(gameScore.player, playerNumber);
            alert(
                `Бот угадал... У вас осталось ${declinationBall(
                    gameScore.player,
                )}.`,
            );
          } else {
            gameScore.bot = decrementScore(gameScore.bot, playerNumber);
            gameScore.player = incrementScore(gameScore.player, playerNumber);
            alert(
                `Вы победили! Теперь у вас ${declinationBall(
                    gameScore.player,
                )}.`,
            );
          }

          console.log(`Вы загадали: ${playerNumber}`);
          console.log(
              `Бот считает, что число ${botPresume ? 'нечетное' : 'четное'}`,
          );
          console.log(`Игрок: ${gameScore.player},\nБот: ${gameScore.bot}`);

          return endGameCheck('player');
        }

        case 'player': {
          const botNumber = getRandomIntNumber(1, gameScore.bot);
          const playerPresume = guessEvenOrOddNumber('player');

          if (playerPresume === null) return closeOrContinueGame(guesses);

          if (botNumber % 2 === playerPresume) {
            gameScore.player = incrementScore(gameScore.player, botNumber);
            gameScore.bot = decrementScore(gameScore.bot, botNumber);
            alert(
                `Вы победили! Теперь у вас ${declinationBall(
                    gameScore.player,
                )}.`,
            );
          } else {
            gameScore.player = decrementScore(gameScore.player, botNumber);
            gameScore.bot = incrementScore(gameScore.bot, botNumber);
            alert(
                `Вы ошиблись... У вас осталось ${declinationBall(
                    gameScore.player,
                )}.`,
            );
          }

          console.log(`Бот загадал: ${botNumber}`);
          console.log(
              `Вы считаете, что число ${playerPresume ? 'нечетное' : 'четное'}`,
          );
          console.log(`Игрок: ${gameScore.player},\nБот: ${gameScore.bot}`);

          return endGameCheck('bot');
        }

        default:
          return;
      }
    };
  };

  window.marbles = game;
})();
