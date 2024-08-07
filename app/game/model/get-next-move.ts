import { MOVES_ORDER } from '../constants';

export function getNextMove({ playersCount, currentMove }) {
  const slicedMovesOrder = MOVES_ORDER.slice(0, playersCount);
  const nextMoveIndex = slicedMovesOrder.indexOf(currentMove) + 1;

  return slicedMovesOrder[nextMoveIndex] ?? slicedMovesOrder[0];
}
