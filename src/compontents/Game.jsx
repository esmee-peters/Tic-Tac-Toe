import React, { useState } from 'react';
import Board from './Board.jsx';
import Scoreboard from './Scoreboard.jsx';

export default function Game() {
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState(null);

  const onBoxHandler = (i) => {
    const newBoxes = [...boxes]; 

    if (player) {
      newBoxes[i] = 'X';
    }
    else {
      newBoxes[i] = 'O';
    }
    setBoxes(newBoxes);
    setPlayer(!player);

    checkWinner(newBoxes);
  }

  const checkWinner = (boxes) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
    // Check boxes on winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        setWinner(boxes[a]);
      }
    }

    // Call it draw if everthing is filled out
    if (boxes.indexOf('') === -1) {
      setWinner('Draw');
    }
  }

  return (
    <div className="game">
      <div  className="game__status">
        {winner ?
          <h2>🎉 We have a winner: {winner} wins!! 🎉</h2> :
          <h3>{player ? 'Player X' : 'Player O'} it's up to you</h3>
        }
      </div>
      <Board boxes={boxes} winner={winner} onBoxHandler={onBoxHandler} />
      <Scoreboard />
    </div>
  )
}