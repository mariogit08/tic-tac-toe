import { useState } from 'react';



export default function GameBoard({ onSelectSquare, gameBoard, gameIsOver }) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(row, col) {
    //     setGameBoard((previous) => {
    //         const gameBoard = [...previous.map(innerArray => [...innerArray])];
    //         gameBoard[row][col] = activePlayer;
    //         return gameBoard;
    //     });

    //     onSelect();
    // }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button disabled={playerSymbol !== null || gameIsOver} onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
}