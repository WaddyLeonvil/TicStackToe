import React, {useState} from 'react';
import './Board.css'
import Square from './Square';

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const [winner, setWinner] = useState(null);
    

    const handleClick = (i) => {
        if (findWinner(squares) || squares[i]) {
            return;
        }

        const updatedSquares = [...squares];
        updatedSquares[i] = isX ? 'X' : 'O';
        setSquares(updatedSquares);
        setIsX(!isX);
    }

    const resetBoard = () => {
        setSquares(Array(9).fill(null));
        setIsX(true);
        setWinner(null);
    }

    const findWinner = (squares) => {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < winningPatterns.length; i++) {
            const [a, b, c] = winningPatterns[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a]);
                return winner;
            }
        }
        setWinner(null);
        return winner;
    }

    return (
        <div className="board">
            <button className="reset" onClick={resetBoard}>Reset</button>
            <div className="board-row">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
        </div>
    )
}
