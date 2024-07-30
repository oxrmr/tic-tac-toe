import { useState } from 'react';
import { GAME_SYMBOLS } from '../game-symbol/constants';
import { MOVES_ORDER } from './field';

export interface UseGameStateReturn {
  nextMove: GAME_SYMBOLS;
  handleCellClick: (index: number) => () => void;
  currentMove: GAME_SYMBOLS;
  cells: any[];
}

export const useGameState = (playersCount: number): UseGameStateReturn => {
  const [gameState, setGameState] = useState(() => ({
    cells: Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const nextMove = getNextMove(playersCount, gameState.currentMove);

  const handleCellClick = (index: number) => () => {
    setGameState(prevState => {
      if (prevState.cells[index]) return prevState;
      return {
        ...prevState,
        currentMove: getNextMove(playersCount, prevState.currentMove),
        cells: prevState.cells.map((cell, i) =>
          i === index ? prevState.currentMove : cell,
        ),
      };
    });
  };

  return {
    nextMove,
    handleCellClick,
    cells: gameState.cells,
    currentMove: gameState.currentMove,
  };
};

function getNextMove(playersCount: number, currentMove: GAME_SYMBOLS) {
  const slicedMovesOrder = MOVES_ORDER.slice(0, playersCount);
  const nextMoveIndex = slicedMovesOrder.indexOf(currentMove) + 1;

  return slicedMovesOrder[nextMoveIndex] ?? slicedMovesOrder[0];
}
