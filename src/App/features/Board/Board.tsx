import { FC } from 'react';
import Square from '../Square/Square';
import './board-styled.css';

interface BoardProps {
  boardState: string[];
  updateBoard: (index: number) => void;
}

const Board: FC<BoardProps> = ({ boardState, updateBoard }) => {
  return (
    <section className="board-container">
      {boardState.map((squareValue, index) => (
        <Square
          key={window.crypto.randomUUID()}
          handleClick={() => updateBoard(index)}
        >
          {squareValue}
        </Square>
      ))}
    </section>
  );
};

export default Board;
