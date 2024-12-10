let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0 };

  function updateScoreDisplay() {
      document.getElementById('scoreDisplay').innerText = 
          `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
  }
  function playGame(playerMove) {
      const computerMove = pickComputerMove();
      let result = '';
      if (playerMove === 'scissors') {
          if (computerMove === 'scissors') {
              result = 'Tie';
          } else if (computerMove === 'rock') {
              result = 'You Lose';
          } else if (computerMove === 'paper') {
              result = 'You Win';
          }
      } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
              result = 'Tie';
          } else if (computerMove === 'paper') {
              result = 'You Lose';
          } else if (computerMove === 'scissors') {
              result = 'You Win';
          }
      } else if (playerMove === 'paper') {
          if (computerMove === 'paper') {
              result = 'Tie';
          } else if (computerMove === 'scissors') {
              result = 'You Lose';
          } else if (computerMove === 'rock') {
              result = 'You Win';
          }
      }

      if (result === 'You Win') {
          score.wins += 1;
      } else if (result === 'You Lose') {
          score.loses += 1;
      } else if (result === 'Tie') {
          score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      document.querySelector('.result').innerHTML = result;

      document.querySelector('.moves').innerHTML  = `You
    <img class="move-icon" src="${playerMove}-emoji.png">
    <img class="move-icon" src="${computerMove}-emoji.png">
    Computer`;
      updateScoreDisplay();
  }

  function pickComputerMove() {
      const randNum = Math.random();
      if (randNum < 1 / 3) {
          return 'rock';
      } else if (randNum < 2 / 3) {
          return 'paper';
      } else {
          return 'scissors';
      }
  }

  function resetScore() {
      score = { wins: 0, loses: 0, ties: 0 };
      localStorage.setItem('score', JSON.stringify(score));
      updateScoreDisplay();
  }

  updateScoreDisplay();