import React from 'react';
import './App.css';
import TicTacToe from './TicTacToe';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn" style={{ cursor: 'default' }} disabled>WebTicTacToe</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container" style={{ minHeight: 'calc(100vh - 88px)' }}>
          {/* Main TicTacToe container */}
          <TicTacToe />
        </div>
      </main>
    </div>
  );
}

export default App;