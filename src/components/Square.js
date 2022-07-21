import React from 'react';
import './Square.css';

export default function Square({value, id, onClick}) {
  return (
    <button className={value === 'X' ? "X square" : value === 'O' ? "O square" : "square"} id={id} onClick={onClick}>
        {value}
    </button>
  )
}
