import { useReducer } from 'react';
import { PLAYERS, PLAYERS_COUNT } from './constants';
import { computePlayerTimer } from './model/compute-player-timer';
import { computeWinner } from './model/compute-winner';
import { computeWinnerSymbol } from './model/compute-winner-symbol';
import { GAME_STATE_ACTIONS, gameStateReducer, initialGameState } from './model/game-state-reducer';
import { getNextMove } from './model/get-next-move';
import { GameMoveInfo } from './ui/assets/game-move-info';
import { BackLink } from './ui/back-link';
import { GameCell } from './ui/game-cell';
import { GameInfo } from './ui/game-info';
import { GameLayout } from './ui/game-layout';
import { GameOverModal } from './ui/game-over-modal';
import { GameTitle } from './ui/game-title';
import { PlayerInfo } from './ui/player-info';
import { useInterval } from '../lib/timers';

export const Game = () => {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT, defaultTimer: 60_00, currentMoveSymbolStart: Date.now() },
    initialGameState,
  );

  useInterval(1000, gameState.currentMoveSymbolStart, () => {
    dispatch({ type: GAME_STATE_ACTIONS.TICK, now: Date.now() });
  });

  const winnerSequence = computeWinner(gameState);
  const nextMoveSymbol = getNextMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, { nextMoveSymbol, winnerSequence });
  const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo
            isRatingGame
            playersCount={4}
            timeMode={'1 min'}
          />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, i) => {
          const { timer, timerStartAt } = computePlayerTimer(gameState, player.symbol);

          return (
            <PlayerInfo
              {...player}
              isItemReversed={i % 2 === 1}
              timer={timer}
              timerStartAt={timerStartAt}
              key={player.name}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo
            currentMove={gameState.currentMoveSymbol}
            nextMove={nextMoveSymbol}
          />
        }
        gameCells={gameState.cells.map((cell, i) => {
          return (
            <GameCell
              onClick={() =>
                dispatch({
                  type: GAME_STATE_ACTIONS.CELL_CLICK,
                  index: i,
                  now: Date.now(),
                })
              }
              isWinner={winnerSequence?.includes(i)}
              disabled={!!winnerSymbol}
              symbol={cell}
              key={i}
            />
          );
        })}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, i) => (
          <PlayerInfo
            {...player}
            isItemReversed={i % 2 === 1}
            isTimerRunning
            timer={gameState.timers[player.symbol]}
            key={player.name}
          />
        ))}
      />
    </>
  );
};
