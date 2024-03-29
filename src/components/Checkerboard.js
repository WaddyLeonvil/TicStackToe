import React from 'react';
import './Checkerboard.css';
import Tile from './Tile';

export default function Checkerboard() {

    const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const verticalAxis = [8, 7, 6, 5, 4, 3, 2, 1];

    let board = [];

    for (let i = 0; i < horizontalAxis.length ; i++) {
        for (let j = 0; j < verticalAxis.length; j++) {
            board.push(<Tile number={j + i} />)
            
        }
    }

    return (
        <div className='checkerboard'>
            {board}
        </div>
    )
}
