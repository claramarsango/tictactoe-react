import { FC } from 'react';
import { TURNS } from '../../data/data';
import './turn-display-styled.css';

interface TurnDisplayProps {
  turnToDisplay: TURNS;
}

const TurnDisplay: FC<TurnDisplayProps> = ({ turnToDisplay }) => {
  return (
    <section className="turns-display-container">
      <h3
        className={`turns__turn ${
          turnToDisplay === TURNS.X ? 'turn--selected' : ''
        }`}
      >
        {TURNS.X}
      </h3>
      <h3
        className={`turns__turn ${
          turnToDisplay === TURNS.O ? 'turn--selected' : ''
        }`}
      >
        {TURNS.O}
      </h3>
    </section>
  );
};

export default TurnDisplay;
