import { useState } from 'react';
import './App.css';
import Board from './features/Board/Board';
import { TURNS } from './data/data';
import TurnDisplay from './features/TurnDisplay/TurnDisplay';
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  return (
    <>
      <header className="title">
        <h1>Tic Tac Toe</h1>
      </header>
      <main className="game">
        <Board
          boardState={board}
          updateBoard={setBoard}
          turnState={turn}
          updateTurn={setTurn}
        />
        <TurnDisplay turnToDisplay={turn} />
      </main>
    </>
  );
};

export default App;
