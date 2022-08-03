import React from 'react';
import './Checkerboard.css';

export default function Checkerboard() {

    const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const verticalAxis = [8, 7, 6, 5, 4, 3, 2, 1];

    let board = [];

    for (let i = 0; i < horizontalAxis.length ; i++) {
        for (let j = 0; j < verticalAxis.length; j++) {
            if ((j + i) % 2 === 0) {
                board.push(<div className='black-tile'></div>)
            }
            else {
                board.push(<div className='white-tile'></div>)
            }
            
        }
    }

    return (
        <div className='checkerboard'>
            {board}
        </div>
    )
}
