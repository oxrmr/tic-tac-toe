import { GAME_SYMBOLS, MOVES_ORDER } from '../constants';
import { getNextMove } from './get-next-move';

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: 'cell_click',
  TICK: 'tick',
};

export const initialGameState = ({ playersCount, defaultTimer, currentMoveSymbolStart }) => ({
  playersCount,
  cells: Array(19 * 19).fill(null),
  currentMoveSymbol: GAME_SYMBOLS.CROSS,
  currentMoveSymbolStart,
  timers: MOVES_ORDER.reduce((timers, symbol, i) => {
    if (i < playersCount) {
      timers[symbol] = defaultTimer;
    }
    return timers;
  }, {}),
});

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index, now } = action;
      if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        currentMoveSymbol: getNextMove(state),
        currentMoveSymbolStart: now,
        cells: updateCell(state, index),
        timers: updateTimers(state, now),
      };
    }
    case GAME_STATE_ACTIONS.TICK: {
      const { now } = action;

      if (isTimerOver(state, now)) {
        return state;
      }

      return {
        ...state,
        currentMoveSymbol: getNextMove(state),
        currentMoveSymbolStart: now,
        timers: updateTimers(state, now),
      };
    }

    default: {
      return state;
    }
  }
};

function isTimerOver(gameState, now) {
  const timer = updateTimers(gameState, now)[gameState.currentMoveSymbol];

  return timer <= 0;
}

function updateTimers(gameState, now) {
  const diff = now - gameState.currentMoveSymbolStart;
  const timer = gameState.timers[gameState.currentMoveSymbol];

  return {
    ...gameState.timers,
    [gameState.currentMoveSymbol]: timer - diff,
  };
}

function updateCell(gameState, index) {
  return gameState.cells.map((cell, i) => (i === index ? gameState.currentMoveSymbol : cell));
}
