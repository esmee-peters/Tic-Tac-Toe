import React from 'react';
import Box from './Box.jsx';

export default function Board({boxes, onBoxHandler}) {
  const createBox = (index) => {
    return (
      <Box
        index={index}
        value={boxes[index]}
        onBoxHandler={onBoxHandler}
      />
    )
  }

  return (
    <div className="board">
      <div className="board__row">
        {createBox(0)}
        {createBox(1)}
        {createBox(2)}
      </div>
      <div className="board__row">
        {createBox(3)}
        {createBox(4)}
        {createBox(5)}
      </div>
      <div className="board__row">
        {createBox(6)}
        {createBox(7)}
        {createBox(8)}
      </div>
    </div>
  )
}