import { FC } from 'react';
import './square-styled.css';

interface SquareProps {
  children: string;
  handleClick?: () => void;
}

const Square: FC<SquareProps> = ({ children, handleClick }) => {
  return (
    <button className="square" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Square;
