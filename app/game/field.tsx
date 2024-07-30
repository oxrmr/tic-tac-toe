'use client';

import { type ReactNode } from 'react';
import { GAME_SYMBOLS } from '../game-symbol/constants';
import { GameSymbol } from '../game-symbol/game-symbol';
import {
  UIButton,
  UIButtonSizes,
  UIButtonVariants,
} from '../uikit/ui-button/ui-button';
import { type UseGameStateReturn } from './use-game-state';

export const MOVES_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.CIRCLE,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

interface FieldProps {
  gameState: UseGameStateReturn;
  className?: string;
}

export const Field = ({ gameState, className }: FieldProps) => {
  const { currentMove, nextMove, cells, handleCellClick } = gameState;

  const actions = (
    <div className='flex items-center gap-3'>
      <UIButton
        size={UIButtonSizes.medium}
        variant={UIButtonVariants.primary}
      >
        Draw
      </UIButton>
      <UIButton
        size={UIButtonSizes.medium}
        variant={UIButtonVariants.outlined}
      >
        Give up
      </UIButton>
    </div>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, i) => (
          <GameCell
            key={i}
            onClick={handleCellClick(i)}
          >
            {symbol && (
              <GameSymbol
                className='h-5 w-5'
                symbol={symbol}
              />
            )}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
};

function GameFieldLayout({
  children,
  className,
}: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <div
      className={`${className} rounded-2xl bg-white px-5 pb-7 pt-5 shadow-md`}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({
  actions,
  currentMove,
  nextMove,
}: Readonly<{
  actions: ReactNode;
  currentMove: GAME_SYMBOLS;
  nextMove: GAME_SYMBOLS;
}>) {
  return (
    <div className='mb-2 flex justify-between'>
      <div>
        <span className='flex items-center gap-1 text-xl'>
          Move:{' '}
          <GameSymbol
            className='h-5 w-5'
            symbol={currentMove}
          />
        </span>
        <span className='flex items-center gap-1 text-xs text-slate-400'>
          Next:{' '}
          <GameSymbol
            className='h-3 w-3'
            symbol={nextMove}
          />
        </span>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className='grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)]'>
      {children}
    </div>
  );
}

function GameCell({
  children,
  onClick,
}: Readonly<{
  children: ReactNode;
  onClick: () => void;
}>) {
  return (
    <button
      className='flex items-center justify-center border'
      onClick={onClick}
    >
      {children}
    </button>
  );
}
