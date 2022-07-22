import React, { useState, useEffect } from 'react';
import './Stack.css';
import { winningPatterns } from '../Utils';
import { renderXPieces, renderOPieces } from '../Utils';
import Square from './Square';
import Piece from './Piece';

export default function Stack() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const [winner, setWinner] = useState(null);
    
    const [active, setActive] = useState(false);

    const handleToggle = ({ target }) => {
        if (active) {
            return;
        }
        alert(target.className);


    }
    
    const [xPieces, setXPieces] = useState(renderXPieces(Piece, handleToggle));
    const [oPieces, setOPieces] = useState(renderOPieces(Piece, handleToggle));
    
    const handleClick = () => {

    }

    const resetBoard = () => {
            
    }
    
    return (
        <div className="stack">
            <button className="reset" onClick={resetBoard}>Reset</button>
            <div className="x-pieces">
                {xPieces}
            </div>
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
            <div className="o-pieces">
                {oPieces}
            </div>
            {!winner ? `Turn: ${isX ? 'X' : 'O'}` : `Winner is ${winner}`}
        </div>
    )
}
