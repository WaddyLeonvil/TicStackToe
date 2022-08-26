import React, { useState } from 'react';
import './TicTacToe.css';
import { winningPatterns } from '../Utils';
import Square from './Square';

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const [winner, setWinner] = useState(null);
    const [messages, setMessages] = useState([]);

    const handleClick = (i) => {
        if (winner || squares[i]) {
            return;
        }

        const updatedSquares = [...squares];
        updatedSquares[i] = isX ? 'X' : 'O';
        setSquares(updatedSquares);
        console.log(findWinner(updatedSquares));
        setIsX(!isX);
        
    }

    const resetBoard = () => {
        setSquares(Array(9).fill(null));
        setIsX(true);
        setWinner(null);
    }

    const findWinner = (squares) => {
        for (let i = 0; i < winningPatterns.length; i++) {
            const [a, b, c] = winningPatterns[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                console.log(`${a} ` + `${b} ` + `${c}`);
                setWinner(squares[a]);
                return squares[a];
            }
        }
        setWinner(null);
        return null;
    }

    return (
        <div className="board">
            <button className="reset" onClick={resetBoard}>Reset</button>
            <div className="full-board">
                <div className="board-row">
                    <Square value={squares[0]} id='cell-0' onClick={() => handleClick(0)} />
                    <Square value={squares[1]} id='cell-1' onClick={() => handleClick(1)} />
                    <Square value={squares[2]} id='cell-2' onClick={() => handleClick(2)} />
                </div>
                <div className="board-row">
                    <Square value={squares[3]} id='cell-3' onClick={() => handleClick(3)} />
                    <Square value={squares[4]} id='cell-4' onClick={() => handleClick(4)} />
                    <Square value={squares[5]} id='cell-5' onClick={() => handleClick(5)} />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} id='cell-6' onClick={() => handleClick(6)} />
                    <Square value={squares[7]} id='cell-7' onClick={() => handleClick(7)} />
                    <Square value={squares[8]} id='cell-8' onClick={() => handleClick(8)} />
                </div>
            </div>
            {!winner ? `Turn: ${isX ? 'X' : 'O'}` : `Winner is ${winner}`}
        </div>
    )
}
