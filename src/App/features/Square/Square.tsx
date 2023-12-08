import { FC } from 'react';
import './square-styled.css';

interface SquareProps {
  children: string;
  updateSquare?: () => void;
}

const Square: FC<SquareProps> = ({ children, updateSquare }) => {
  return (
    <button className="square" onClick={updateSquare}>
      {children}
    </button>
  );
};

export default Square;
