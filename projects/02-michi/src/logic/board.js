import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  // Revisamos todas las combinaciones ganadoras para ver si X u O ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] && // 0 -> X u O
      boardToCheck[a] === boardToCheck[b] && // 0 y 3 -> X -> X u O -> O
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }

  // Si no hay ganador
  return null;
};

// export const checkWinnerFrom = (boardToCheck) => {
//   for (const combo of WINNER_COMBOS) {
//     const [a, b, c, d] = combo;
//     if (
//       boardToCheck[a] &&
//       boardToCheck[a] === boardToCheck[b] &&
//       boardToCheck[a] === boardToCheck[c] &&
//       boardToCheck[a] === boardToCheck[d]
//     ) {
//       return boardToCheck[a];
//     }
//   }

//   return null;
// };

export const checkEndGameFrom = (newBoard) => {
  // Revisamos si hay un empate y si no hay espacios vacios
  return newBoard.every((square) => square !== null);
};
