import React, { useState, useEffect } from 'react';
import Board from './Board.jsx';
import Scoreboard from './Scoreboard.jsx';

export default function Game() {
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState(null);

  const storage = window.localStorage;

  if (!storage.getItem('games')) {
    storage.setItem('games', JSON.stringify([]));
  }

  const onBoxHandler = (i) => {
    const newBoxes = [...boxes]; 
  
    if (player) {
      newBoxes[i] = 'X';
  
      // After player immediately computer time
      const nextEmptyBox = newBoxes.indexOf('');
      if (nextEmptyBox !== -1) {
        newBoxes[nextEmptyBox] = 'O';
      }
    }
  
    setBoxes(newBoxes);
    checkWinner(newBoxes);
  }

  const checkWinner = (boxes) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
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

  const clearGame = () => {
    setWinner(null);
    setBoxes(Array(9).fill(''));
  }

  useEffect(() => {
    if (winner === 'X' || winner === 'O' || winner === 'Draw' ) {
      const playedGames = JSON.parse(storage.getItem('games'));
      playedGames.push({ winner });
      storage.setItem('games', JSON.stringify(playedGames));
    }
  }, [winner]);

  return (
    <div className="game">
      <div  className="game__status">
        {winner ?
          <h2>🎉 We have a winner: {winner} wins!! 🎉</h2> :
          <h3>{player ? 'Player X' : 'Player O'} it's up to you</h3>
        }
      </div>
      <Board boxes={boxes} winner={winner} onBoxHandler={onBoxHandler} />
      <button onClick={() => clearGame()}>Reset game</button>
      <Scoreboard storage={storage} />
    </div>
  )
}