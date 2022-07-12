import React from 'react'
import Square from './Square'

export default function Board() {
  return (
    <div className="board">
        <div className="board-row">
            <Square value={'X'} />
            <Square value={'O'} />
            <Square value={'X'} />
        </div>
        <div className="board-row">
            <Square value={'O'} />
            <Square value={'X'} />
            <Square value={'O'} />
        </div>
        <div className="board-row">
            <Square value={'X'} />
            <Square value={'O'} />
            <Square value={'X'} />
        </div>
    </div>
  )
}
