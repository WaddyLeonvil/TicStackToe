import React, {useState} from 'react';
import './Piece.css';

export default function Piece({size, player, handleToggle}) {
    const [active, setActive] = useState(false);

    return (
        <div className={`piece ${player}`} id={`size-${size}`} onClick={handleToggle}>
            {size}
        </div>
    )
}