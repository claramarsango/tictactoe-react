import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Given a web page when there is a main title, then the title should appear', () => {
  render(<App />);

  const mainTitle = screen.getByText('Tic Tac Toe');
  expect(mainTitle).toBeInTheDocument();
});
