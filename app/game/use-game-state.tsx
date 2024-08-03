import { useState } from 'react';
import { GAME_SYMBOLS } from '../game-symbol/constants';
import { computeWinner, getNextMove } from '../model';

export interface UseGameStateReturn {
  nextMove: GAME_SYMBOLS;
  handleCellClick: (index: number) => () => void;
  handlePlayerTimeOver: (symbol: GAME_SYMBOLS) => () => void;
  currentMove: GAME_SYMBOLS;
  cells: any[];
  winnerSequence: number[] | undefined;
  winnerSymbol: number | GAME_SYMBOLS | undefined;
}

export const useGameState = (playersCount: number): UseGameStateReturn => {
  const [gameState, setGameState] = useState<{
    playerTimeOver: GAME_SYMBOLS[];
    currentMove: GAME_SYMBOLS;
    cells: any[];
  }>(() => ({
    cells: Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
    playerTimeOver: [],
  }));

  const winnerSequence = computeWinner(gameState.cells);
  const nextMove = getNextMove(
    playersCount,
    gameState.currentMove,
    gameState.playerTimeOver,
  );

  const winnerSymbol =
    nextMove === gameState.currentMove
      ? gameState.currentMove
      : winnerSequence?.[0];

  const handleCellClick = (index: number) => () => {
    setGameState(prevState => {
      if (prevState.cells[index]) return prevState;
      return {
        ...prevState,
        currentMove: getNextMove(
          playersCount,
          prevState.currentMove,
          gameState.playerTimeOver,
        ),
        cells: prevState.cells.map((cell, i) =>
          i === index ? prevState.currentMove : cell,
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol: GAME_SYMBOLS) => () => {
    setGameState(prevState => ({
      ...prevState,
      playerTimeOver: [...prevState.playerTimeOver, symbol],
      currentMove: getNextMove(
        playersCount,
        prevState.currentMove,
        gameState.playerTimeOver,
      ),
    }));
  };

  return {
    nextMove,
    handleCellClick,
    handlePlayerTimeOver,
    cells: gameState.cells,
    currentMove: gameState.currentMove,
    winnerSequence,
    winnerSymbol,
  };
};
