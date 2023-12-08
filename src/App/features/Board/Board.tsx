import { FC } from 'react';
import Square from '../Square/Square';
import './board-styled.css';
import { TURNS } from '../../data/data';

interface BoardProps {
  boardState: string[];
  updateBoard: (board: string[]) => void;
  turnState: TURNS;
  updateTurn: (turn: TURNS) => void;
}

const Board: FC<BoardProps> = ({
  boardState,
  updateBoard,
  turnState,
  updateTurn,
}) => {
  const drawFigure = (squareIndex: number) => {
    const newBoard = [...boardState];

    if (newBoard[squareIndex]) return;

    newBoard[squareIndex] = turnState;

    const newTurn = turnState === TURNS.X ? TURNS.O : TURNS.X;

    updateBoard(newBoard);
    updateTurn(newTurn);
  };

  return (
    <section className="board-container">
      {boardState.map((squareValue, index) => (
        <Square
          children={squareValue}
          key={crypto.randomUUID()}
          updateSquare={() => drawFigure(index)}
        />
      ))}
    </section>
  );
};

export default Board;
