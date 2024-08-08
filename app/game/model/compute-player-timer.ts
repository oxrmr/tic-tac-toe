export const computePlayerTimer = (state, playerSymbol) => {
  return {
    timer: state.timers[playerSymbol],
    timerStartAt:
      playerSymbol === state.currentMoveSymbol ? state.currentMoveSymbolStart : undefined,
  };
};
