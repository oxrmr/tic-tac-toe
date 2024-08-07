import { GameSymbol } from '@/app/game/game-symbol/game-symbol';
import clsx from 'clsx';
import type { FC } from 'react';
import type { GAME_SYMBOLS } from '../constants';

interface GameCellProps {
  onClick: () => void;
  isWinner: boolean | undefined;
  disabled: boolean;
  symbol: GAME_SYMBOLS;
}

export const GameCell: FC<GameCellProps> = props => {
  return (
    <button
      disabled={props.disabled}
      className={clsx(
        '-mb-px -mr-px flex items-center justify-center border',
        props.isWinner && 'bg-green-400',
      )}
      onClick={props.onClick}
    >
      {props.symbol && (
        <GameSymbol
          className='h-5 w-5'
          symbol={props.symbol}
        />
      )}
    </button>
  );
};
