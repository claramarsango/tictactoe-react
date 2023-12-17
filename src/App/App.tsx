import { useState } from 'react';
import './App.css';
import Board from './features/Board/Board';
import { TURNS, WINNING_COMBOS } from './data/data';
import TurnDisplay from './features/TurnDisplay/TurnDisplay';
import WinnerModal from './features/WinnerModal/WinnerModal';
import confetti from 'canvas-confetti';
import Square from './features/Square/Square';
import Footer from './features/Footer/Footer';

const checkForAWinner = (boardToCheck: string[]) => {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
};
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState('');

  const drawFigure = (squareIndex: number) => {
    if (board[squareIndex] || winner) return;

    const newBoard = [...board];
    newBoard[squareIndex] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkForAWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (newBoard.every(square => square)) {
      return setWinner('Tie!');
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner('');
  };

  return (
    <>
      <header className="title">
        <h1>Tic Tac Toe</h1>
      </header>
      <main className="game">
        <div className="game__restart-container">
          <Square handleClick={() => restartGame()}>Restart game</Square>
        </div>
        <Board boardState={board} updateBoard={drawFigure} />
        <TurnDisplay turnToDisplay={turn} />
        <WinnerModal handleEndOfGame={restartGame}>{winner}</WinnerModal>
      </main>
      <Footer />
    </>
  );
};

export default App;
