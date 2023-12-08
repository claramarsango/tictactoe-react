import './App.css';
import Board from './features/Board/Board';

function App() {
  return (
    <>
      <header className="title">
        <h1>Tic Tac Toe</h1>
      </header>
      <main>
        <Board />
      </main>
    </>
  );
}

export default App;
