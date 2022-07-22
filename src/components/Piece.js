import React, {useState} from 'react';
import './Piece.css';

export default function Piece({size, player}) {
    const [active, setActive] = useState(false);

    return (
        <div className={`piece ${player}`} id={`size-${size}`}>
            {size}
        </div>
    )
}