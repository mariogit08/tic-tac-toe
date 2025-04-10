import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const initialGameBoard =
    [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  function deriveWinner() {
    for (const element of WINNING_COMBINATIONS) {
      const firstSpot = gameBoard[element[0].row][element[0].column];
      const secondSpot = gameBoard[element[1].row][element[1].column];
      const thirdSpot = gameBoard[element[2].row][element[2].column];

      if (firstSpot && firstSpot === secondSpot && secondSpot === thirdSpot) {
        return firstSpot;
      }
    }
  }

  let winner = deriveWinner();

  function deriveActivePlayer(turns) {
    let currentPlayer = 'X';

    if (turns.length > 0 && turns[0].player === 'X') {
      currentPlayer = 'O';
    }

    return currentPlayer;
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }
        , ...prevTurns
      ]

      return updatedTurns;
    });
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer == "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer == "O"} />
        </ol>
        {winner && "You WON! " + winner}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} gameIsOver={winner !== undefined} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App;