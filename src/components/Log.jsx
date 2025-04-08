// export default function Log({ turns }) {

//     return <ol id="log">
//         {turns.map((turn, index) =>
//             <li key={`${turn.square.row}${turn.square.col}`}>
//                 {`${turns.length - index}. Player: ${turn.player} H:${turn.square.row} V:${turn.square.col}`}
//             </li>)}
//     </ol>
// }

export default function Log({ turns }) {
    const renderCompactASCII = (row, col, symbol) => {
        const grid = [
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '.']
        ];

        grid[row][col] = symbol; // Using X to mark the position

        return `[${grid[0][0]}${grid[0][1]}${grid[0][2]}]
[${grid[1][0]}${grid[1][1]}${grid[1][2]}]
[${grid[2][0]}${grid[2][1]}${grid[2][2]}]`;
    };

    return <ol id="log">
        {turns.map((turn, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <span>{`${turns.length - index}. Player ${turn.player} -> `}</span>
                <pre style={{
                    margin: '0 0 0 8px',
                    fontSize: '0.8em',
                    lineHeight: '1.1'
                }}>{renderCompactASCII(turn.square.row, turn.square.col, turn.player)}</pre>
            </li>
        ))}
    </ol>
}