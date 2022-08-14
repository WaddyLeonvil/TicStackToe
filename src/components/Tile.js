import React from 'react';
import './Tile.css';

export default function Tile({ number }) {
    if (number % 2) {
        return <div className="tile black-tile"></div>
    }
    else {
        return <div className="tile white-tile"></div>
    }
}
