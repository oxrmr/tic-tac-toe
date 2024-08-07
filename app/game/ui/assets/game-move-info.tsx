import { GameSymbol } from '@/app/game/game-symbol/game-symbol';
import type { GAME_SYMBOLS } from '@/app/new-game/game-symbol/constants';
import type { FC } from 'react';

interface GameMoveInfoProps {
  currentMove: GAME_SYMBOLS;
  nextMove: GAME_SYMBOLS;
}

export const GameMoveInfo: FC<GameMoveInfoProps> = props => {
  return (
    <>
      <span className='flex items-center gap-1 text-xl'>
        Move:
        <GameSymbol
          className='h-5 w-5'
          symbol={props.currentMove}
        />
      </span>
      <span className='flex items-center gap-1 text-xs text-slate-400'>
        Next:
        <GameSymbol
          className='h-3 w-3'
          symbol={props.nextMove}
        />
      </span>
    </>
  );
};
