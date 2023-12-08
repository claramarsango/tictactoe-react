import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { cryptoMock } from '../../test/__mocks__/fileMock';
import App from '../../App';

describe('Given a tic-tac-toe board', () => {
  beforeEach(() => {
    cryptoMock;
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("when a square is clicked, then an 'X' should be drawn in", async () => {
    render(<App />);

    const board = screen.getAllByRole('button');
    const square = board[0];

    await userEvent.click(square);

    waitFor(async () => {
      const clickedSquare = square;
      expect(clickedSquare.textContent).toBe('X');
    });
  });

  test('when the user clicks a square that has already been drawn in, the shape should stay the same', async () => {
    render(<App />);

    const board = screen.getAllByRole('button');
    const square = board[0];

    await userEvent.click(square);

    const clickedSquare = square;
    expect(clickedSquare.textContent).toBe('x');

    await userEvent.click(clickedSquare);
    expect(clickedSquare.textContent).toBe('x');
  });

  test("when 'X' has already played and a different square is clicked, a 'O' shape should be drawn in", async () => {
    render(<App />);

    const board = screen.getAllByRole('button');
    const firstSquare = board[0];

    await userEvent.click(firstSquare);

    const clickedSquare = firstSquare;
    expect(clickedSquare.textContent).toBe('x');

    const differentSquare = board[1];

    await userEvent.click(differentSquare);
    expect(differentSquare.textContent).toBe('o');
  });
});
