import type { GAME_SYMBOLS } from './game-symbol/constants';
import { MOVES_ORDER } from './game/field';

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

export function computeWinner(cells: any[], sequenceSize = 5, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(indexes: number[]) {
    let res = true;

    for (let i = 1; i < indexes.length; i++) {
      res &&= !!cells[indexes[i]];
      res &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }

    return res;
  }

  function getSequenceIndexes(index: number) {
    const res: number[][] = [
      [], // -
      [], // \
      [], // /
      [], // \
    ];

    for (let j = 0; j < sequenceSize; j++) {
      const h = j - gap + index;
      res[0].push(h);
      res[1].push(fieldSize * (j - gap) + (j - gap) + index);
      res[2].push(-fieldSize * (j - gap) + (j - gap) + index);
      res[3].push(fieldSize * (j - gap) + index);
    }

    const x = index % fieldSize;
    if (x < gap || x >= fieldSize - gap) {
      res.shift();
      res.shift();
      res.shift();
    }

    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRow = getSequenceIndexes(i);

      const winnerIndexes = indexRow.find(row => compareElements(row));

      if (winnerIndexes) {
        console.log(winnerIndexes);
        return winnerIndexes;
      }
    }
  }
  return undefined;
}
