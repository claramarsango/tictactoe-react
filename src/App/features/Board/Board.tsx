import { useState } from 'react';
import Square from '../Square/Square';
import './board-styled.css';

enum TURNS {
  X = 'x',
  O = 'o',
}

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const drawFigure = (squareIndex: number) => {
    const newBoard = [...board];

    if (newBoard[squareIndex]) return;

    newBoard[squareIndex] = turn;

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    setBoard(newBoard);
    setTurn(newTurn);
  };

  return (
    <>
      <section className="board-container">
        {board.map((squareValue, index) => (
          <Square
            children={squareValue}
            key={index}
            updateSquare={() => drawFigure(index)}
          />
        ))}
      </section>
    </>
  );
};

export default Board;
