export const computeWinner = (state: any, sequenceSize = 5, fieldSize = 19) => {
  const gap = Math.floor(sequenceSize / 2);

  for (let i = 0; i < state.cells.length; i++) {
    if (state.cells[i]) {
      const indexRow = getSequenceIndexes(i, sequenceSize, fieldSize, gap);

      const winnerIndexes = indexRow.find(row => compareElements(row, state.cells));

      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }
  return undefined;
};

function getSequenceIndexes(index: number, sequenceSize: number, fieldSize: number, gap: number) {
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

function compareElements(indexes: number[], cells: any[]) {
  let res = true;

  for (let i = 1; i < indexes.length; i++) {
    res &&= !!cells[indexes[i]];
    res &&= cells[indexes[i]] === cells[indexes[i - 1]];
  }

  return res;
}
