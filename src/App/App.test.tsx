import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Given a web page when there is a main title, then the title should appear', () => {
  render(<App />);

  const mainTitle = screen.getByText('Tic Tac Toe');
  expect(mainTitle).toBeInTheDocument();
});

describe('Given a tic-tac-toe board', () => {
  test("when a square is clicked, then an 'X' should be drawn in", async () => {
    render(<App />);

    const board = screen.getAllByRole('button', { name: '' });
    const square = board[0];

    await userEvent.click(square);

    const clickedSquare = square;
    expect(clickedSquare.textContent).toBe('x');
  });

  test('when the user clicks a square that has already been drawn in, the shape should stay the same', async () => {
    render(<App />);

    const board = screen.getAllByRole('button', { name: '' });
    const square = board[0];

    await userEvent.click(square);

    const clickedSquare = square;
    expect(clickedSquare.textContent).toBe('x');

    await userEvent.click(clickedSquare);
    expect(clickedSquare.textContent).toBe('x');
  });

  test("when 'X' has already played and a different square is clicked, a 'O' shape should be drawn in", async () => {
    render(<App />);

    const board = screen.getAllByRole('button', { name: '' });
    const firstSquare = board[0];

    await userEvent.click(firstSquare);

    const clickedSquare = firstSquare;
    expect(clickedSquare.textContent).toBe('x');

    const differentSquare = board[1];

    await userEvent.click(differentSquare);
    expect(differentSquare.textContent).toBe('o');
  });

  test("when player 'X' makes the winning move, a modal message should appear on the screen informing 'X' is the winner", async () => {
    render(<App />);

    const board = screen.getAllByRole('button', { name: '' });

    userEvent.click(board[0]);
    userEvent.click(board[1]);
    userEvent.click(board[3]);
    userEvent.click(board[2]);
    userEvent.click(board[6]);

    const winningMessage = await screen.findByRole('heading', {
      name: 'Winner! x',
    });

    expect(winningMessage).toBeInTheDocument();
  });

  test("when player 'O' makes the winning move, a modal message should appear on the screen informing 'O' is the winner", async () => {
    render(<App />);

    const board = screen.getAllByRole('button', { name: '' });

    userEvent.click(board[0]);
    userEvent.click(board[1]);
    userEvent.click(board[2]);
    userEvent.click(board[4]);
    userEvent.click(board[5]);
    userEvent.click(board[7]);

    const winningMessage = await screen.findByRole('heading', {
      name: 'Winner! o',
    });

    expect(winningMessage).toBeInTheDocument();
  });

  test('when neither player wins, a modal message should appear on the screen informing there has been a tie', async () => {
    render(<App />);

    const board = screen.getAllByRole('button', { name: '' });

    userEvent.click(board[0]);
    userEvent.click(board[1]);
    userEvent.click(board[2]);
    userEvent.click(board[3]);
    userEvent.click(board[4]);
    userEvent.click(board[6]);
    userEvent.click(board[5]);
    userEvent.click(board[8]);
    userEvent.click(board[7]);

    const winningMessage = await screen.findByRole('heading', { name: 'Tie!' });

    expect(winningMessage).toBeInTheDocument();
  });

  test('when the game is restarted, the board should be cleaned', async () => {
    render(<App />);

    const board = screen.getAllByRole('button', { name: '' });
    await userEvent.click(board[1]);
    expect(board[1]).toHaveTextContent('x');

    const restartButton = screen.getByRole('button', { name: 'Restart game' });
    await userEvent.click(restartButton);
    expect(board[1]).toHaveTextContent('');
  });

  test('when the game ends and the user chooses to play again, the modal should disappear and a new game should be set up', async () => {
    render(<App />);

    const board = screen.getAllByRole('button', { name: '' });

    userEvent.click(board[0]);
    userEvent.click(board[1]);
    userEvent.click(board[3]);
    userEvent.click(board[2]);
    userEvent.click(board[6]);

    const newGameButton = await screen.findByRole('button', {
      name: 'Play again',
    });

    await userEvent.click(newGameButton);

    expect(newGameButton).not.toBeInTheDocument();
    expect(board[0]).toHaveTextContent('');
  });
});
