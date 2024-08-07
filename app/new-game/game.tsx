import { PLAYERS } from '@/players';
import { useGameState } from './model/use-game-state';
import { GameMoveInfo } from './ui/assets/game-move-info';
import { BackLink } from './ui/back-link';
import { GameCell } from './ui/game-cell';
import { GameInfo } from './ui/game-info';
import { GameLayout } from './ui/game-layout';
import { GameOverModal } from './ui/game-over-modal';
import { GameTitle } from './ui/game-title';
import { PlayerInfo } from './ui/player-info';

const PLAYERS_COUNT = 2;

export const Game = () => {
  const gameState = useGameState(PLAYERS_COUNT);

  const winnerName = PLAYERS.find(
    player => player.symbol === gameState.winnerSymbol,
  );

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
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, i) => (
          <PlayerInfo
            {...player}
            isItemReversed={i % 2 === 1}
            isTimerRunning
            seconds={60}
            key={player.name}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo
            currentMove={gameState.currentMove}
            nextMove={gameState.nextMove}
          />
        }
        gameCells={gameState.cells.map((cell, i) => {
          return (
            <GameCell
              onClick={gameState.handleCellClick(i)}
              isWinner={gameState.winnerSequence?.includes(i)}
              disabled={!!gameState.winnerSymbol}
              symbol={cell}
              key={i}
            />
          );
        })}
      />
      <GameOverModal
        winnerName={winnerName?.name}
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, i) => (
          <PlayerInfo
            {...player}
            isItemReversed={i % 2 === 1}
            isTimerRunning
            seconds={60}
            key={player.name}
          />
        ))}
      />
    </>
  );
};
