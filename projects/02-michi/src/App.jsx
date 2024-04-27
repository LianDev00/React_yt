import { useState } from "react";

import confetti from "canvas-confetti";

import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGameFrom } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { saveGameToStorage, resetGameStorage } from "./logic/storage/index";

function App() {
  //console.log("render");

  const [board, setBoard] = useState(() => {
    //console.log("Inicializar estado del board");
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
    //return Array(16).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFormStorage = window.localStorage.getItem("turn");
    return turnFormStorage ?? TURNS.X;
  });

  // null -> nadie gana, false -> empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    //setBoard(Array(16).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  };

  const updateBoard = (index) => {
    // No actualizamos esta posicion si ya tiene un valor asignado('X' u 'O')
    if (board[index] || winner) return;

    // Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn; // X u O
    setBoard(newBoard);

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //Guardar la partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn,
    });

    // Revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner); // ???? La actualizacion de los estados en React son asincronos
    } else if (checkEndGameFrom(newBoard)) {
      setWinner(false); // empate
    }
  };

  // useEffect(() => {
  //   // como minimo se ejecuta una vez
  //   console.log("useEffect");
  // }, []);

  return (
    <main className='board'>
      <h1>Michi</h1>
      <button onClick={resetGame}>Reiniciar</button>
      <section className='game'>
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
