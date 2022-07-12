import React from 'react'
import Square from './Square'

export default function Board() {
  return (
    <div className="board">
        <Square value={'X'} />
        <Square value={'O'} />
        <Square value={'X'} />
        <Square value={'O'} />
        <Square value={'X'} />
        <Square value={'O'} />
        <Square value={'X'} />
        <Square value={'O'} />
        <Square value={'X'} />
    </div>
  )
}
