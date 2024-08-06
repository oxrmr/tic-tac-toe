import { PLAYERS } from '@/players';
import { useGameState } from './model/use-game-state';
import { GameMoveInfo } from './ui/assets/game-move-info';
import { BackLink } from './ui/back-link';
import { GameCell } from './ui/game-cell';
import { GameInfo } from './ui/game-info';
import { GameLayout } from './ui/game-layout';
import { GameTitle } from './ui/game-title';
import { PlayerInfo } from './ui/player-info';

const PLAYERS_COUNT = 2;

export const Game = () => {
  const gameState = useGameState(PLAYERS_COUNT);

  return (
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
      playersList={PLAYERS.map((player, i) => (
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
            disabled={
              !!(gameState.winnerSymbol === 0 || gameState.winnerSymbol)
            }
            symbol={cell}
            key={i}
          />
        );
      })}
    />
  );
};
