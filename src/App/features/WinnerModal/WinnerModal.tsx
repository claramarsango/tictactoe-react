import { FC } from 'react';
import './winner-modal-styled.css';
import Square from '../Square/Square';

interface ModalProps {
  children: string;
  handleEndOfGame: () => void;
}

const WinnerModal: FC<ModalProps> = ({ children, handleEndOfGame }) => {
  if (!children) return null;

  return (
    <section className="winner-modal-screen">
      <div className="winner-modal-container">
        {children !== 'Tie!' ? (
          <h3 className="modal__message">
            Winner! <Square>{children}</Square>
          </h3>
        ) : (
          <h3 className="modal__message">Tie!</h3>
        )}
        <Square handleClick={() => handleEndOfGame()}>Play again</Square>
      </div>
    </section>
  );
};

export default WinnerModal;
