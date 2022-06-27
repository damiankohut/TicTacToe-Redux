import React from 'react'
import { useSelector} from 'react-redux'
import Cell from "./Cell"

function Board(){
  const cells = useSelector(state => state.ttt.board)
  return (
    <div className="board">
      {cells.map((square, i) => (
        <Cell key={i} value={square} index={i}/>
      ))}
    </div>
  )
};

export default Board