import type { GAME_SYMBOLS } from '@/app/game-symbol/constants';
import { MOVES_ORDER } from '@/app/game/field';

export function getNextMove(
  playersCount: number,
  currentMove: GAME_SYMBOLS,
  playersTimeOver: GAME_SYMBOLS[],
) {
  const slicedMovesOrder = MOVES_ORDER.slice(0, playersCount).filter(
    symbol => !playersTimeOver.includes(symbol),
  );
  const nextMoveIndex = slicedMovesOrder.indexOf(currentMove) + 1;

  return slicedMovesOrder[nextMoveIndex] ?? slicedMovesOrder[0];
}
