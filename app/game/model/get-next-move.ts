import { MOVES_ORDER } from '../constants';

export function getNextMove({ playersCount, currentMoveSymbol, timers }) {
  const slicedMovesOrder = MOVES_ORDER.slice(0, playersCount).filter(symbol => timers[symbol] > 0);
  const nextMoveIndex = slicedMovesOrder.indexOf(currentMoveSymbol) + 1;

  return slicedMovesOrder[nextMoveIndex] ?? slicedMovesOrder[0];
}
