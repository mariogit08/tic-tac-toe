import { useState } from 'react';

const initialGameBoard =
    [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

export default function GameBoard({ onSelectSquare, turns }) {

    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

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
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
}