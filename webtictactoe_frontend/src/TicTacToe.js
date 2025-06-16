import React, { useState } from 'react';
import './TicTacToe.css';

// PUBLIC_INTERFACE
function TicTacToe() {
  // State for the 3x3 board, each cell is null, 'X', or 'O'
  const [board, setBoard] = useState(Array(9).fill(null));
  // X always starts
  const [xIsNext, setXIsNext] = useState(true);
  // Track if game is won
  const winner = calculateWinner(board);

  // PUBLIC_INTERFACE
  function handleClick(index) {
    if (board[index] || winner) return; // Ignore if cell occupied or game over
    const boardCopy = board.slice();
    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  // PUBLIC_INTERFACE
  function restartGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  // PUBLIC_INTERFACE
  function renderSquare(index) {
    const value = board[index];
    return (
      <button
        className={`ttt-square ${value ? 'filled' : ''}`}
        style={{
          color:
            value === 'X'
              ? 'var(--primary-color)'
              : value === 'O'
              ? 'var(--secondary-color)'
              : 'inherit'
        }}
        onClick={() => handleClick(index)}
        aria-label={`Cell ${index + 1}${value ? ': ' + value : ''}`}
      >
        {value}
      </button>
    );
  }

  // PUBLIC_INTERFACE
  function getStatus() {
    if (winner) {
      return winner === 'draw'
        ? "It's a draw!"
        : `Winner: ${winner === 'X' ? 'Player 1 (X)' : 'Player 2 (O)'}`;
    } else {
      return `Next: ${xIsNext ? 'Player 1 (X)' : 'Player 2 (O)'}`;
    }
  }

  return (
    <div className="ttt-container">
      <h2 className="ttt-title">
        WebTicTacToe
        <span className="ttt-accent-dot">.</span>
      </h2>
      <div className="ttt-status" data-testid="game-status">
        {getStatus()}
      </div>
      <div className="ttt-board">
        {[0, 1, 2].map(row => (
          <div className="ttt-board-row" key={row}>
            {renderSquare(row * 3)}
            {renderSquare(row * 3 + 1)}
            {renderSquare(row * 3 + 2)}
          </div>
        ))}
      </div>
      <button className="ttt-restart-btn" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}

// PUBLIC_INTERFACE
function calculateWinner(board) {
  // All winning lines
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let [a, b, c] of lines) {
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return board[a];
    }
  }
  // Check for draw
  if (board.every(cell => cell)) {
    return 'draw';
  }
  return null;
}

export default TicTacToe;
