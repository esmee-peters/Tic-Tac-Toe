
import React from 'react';

export default function Scoreboard({storage}) {
  const playedGames = JSON.parse(storage.getItem('games'));
  let countX = 0;
  let countO = 0;
  let countDraw = 0;

  playedGames.forEach((game) => {
    if (game.winner === 'X') {
      countX += 1;
    } 
    if (game.winner === 'O') {
      countO += 1;
    }
    if (game.winner === 'Draw') {
      countDraw +=1 ;
    }
  })

  return (
    <div className="scoreboard">
      <h3>Scoreboard</h3>
      <div className="scoreboard__points">
        <span>X: {countX}</span><br />
        <span>O: {countO}</span><br />
        <span>Draw: {countDraw}</span>
      </div>
    </div>
  )
}
