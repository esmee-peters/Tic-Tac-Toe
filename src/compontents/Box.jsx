import React from 'react';

export default function Box({index, value, onBoxHandler}) {
  return (
    <button className="box" onClick={() => onBoxHandler(index)}>
      {value}
    </button>
  )
}
