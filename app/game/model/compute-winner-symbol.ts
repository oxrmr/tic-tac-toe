export const computeWinnerSymbol = (gameState, { nextMoveSymbol, winnerSequence }) => {
  return nextMoveSymbol === gameState.currentMoveSymbol
    ? gameState.currentMoveSymbol
    : gameState.cells[winnerSequence?.[0]];
};
