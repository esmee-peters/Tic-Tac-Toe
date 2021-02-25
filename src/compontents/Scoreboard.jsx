
import React from 'react';

export default function Scoreboard() {
  return (
    <div className="scoreboard">
      <h3>Scoreboard</h3>
      <div className="scoreboard__points">
        <span>X: </span>
        <span>O: </span>
        <span>draw: </span>
      </div>
    </div>
  )
}