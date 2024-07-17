import { useState, type ReactNode } from "react";
import { UIButton, UIButtonSizes, UIButtonVariants } from "../uikit/ui-button/ui-button";
import { CircleIcon } from "./assets/svg/circle-icon";
import { CrossIcon } from "./assets/svg/cross-icon";

interface GameFieldProps {
  className?: string;
}

enum GAME_SYMBOLS {
  CROSS = 'cross',
  CIRCLE = 'circle',
  TRIANGLE = 'triangle',
  SQUARE = 'square'
}

const MOVES_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.CIRCLE,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE
]

function getNextMove(currentMove: GAME_SYMBOLS) {
  const nextMoveIndex = MOVES_ORDER.indexOf(currentMove) + 1
  return MOVES_ORDER[nextMoveIndex] ?? MOVES_ORDER[0]
}

export const GameField = ({ className }: GameFieldProps) => {
  const [cells, setCells] = useState(() => Array(19 * 19).fill(null));
  const [currentMove, setCurrentMove] = useState(GAME_SYMBOLS.CROSS);

  const nextMove = getNextMove(currentMove)

  const actions = (
    <div className="flex items-center gap-3">
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
  )

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={
          actions
        }
      />
      <GameGrid>
        {cells
          .map((_, i) => (
            <GameCell key={i}>{_}</GameCell>
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
    <div className={`${className} rounded-2xl bg-white px-5 pb-7 pt-5 shadow-md`}>{children}</div>
  );
}

function GameMoveInfo({ actions }: Readonly<{ actions: ReactNode }>) {
  return (
    <div className="mb-2 flex justify-between">
      <div>
        <span className="flex items-center gap-1 text-xl">
          Move: <CircleIcon size="20" />
        </span>
        <span className="flex items-center gap-1 text-xs text-slate-400">
          Next: <CrossIcon />
        </span>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)]">
      {children}
    </div>
  )
}

function GameCell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <button className="border" >{children}</ button>
  )
}