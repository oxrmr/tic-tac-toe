import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { players } from '../../players';
import type { GAME_SYMBOLS } from '../game-symbol/constants';
import { GameSymbol } from '../game-symbol/game-symbol';
import { useInterval } from '../hooks';
import { Profile } from '../profile/profile';

interface ParticipantsInfoProps {
  currentMove: GAME_SYMBOLS;
  playersCount: number;
  className?: string;
  isWinner: boolean;
  onPlayerTimeOver: (symbol: GAME_SYMBOLS) => () => void;
}

export const ParticipantsInfo = ({
  playersCount,
  currentMove,
  onPlayerTimeOver,
  className,
  isWinner,
}: ParticipantsInfoProps) => {
  return (
    <div
      className={`${className} shadow-xs grid grid-cols-2 gap-4 rounded-2xl bg-white px-8 py-4`}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.name}
          playerInfo={player}
          onTimeOver={onPlayerTimeOver(player.symbol)}
          isItemReversed={index % 2 === 1}
          isTimerRunning={currentMove === player.symbol && !isWinner}
        />
      ))}
    </div>
  );
};

function PlayerInfo({
  playerInfo,
  onTimeOver,
  isItemReversed,
  isTimerRunning,
}: Readonly<PlayerInfoProps>) {
  const [seconds, setSeconds] = useState(6);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsString = String(seconds % 60).padStart(2, '0');

  const isDanger = seconds < 10;

  useInterval(
    () => {
      if (isTimerRunning) {
        setSeconds(s => s - 1);
      }
    },
    seconds !== 0 ? 1000 : null,
  );

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
  }, [seconds]);

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? 'text-orange-600' : 'text-slate-900';
    }
    return 'text-slate-200';
  };

  return (
    <div
      className={clsx(
        'flex items-center justify-between',
        isItemReversed && 'flex-row-reverse',
      )}
    >
      <div className='relative'>
        <div className='shadow-xs absolute -left-px -top-px flex h-5 w-5 items-center justify-center rounded-full bg-white p-1'>
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
        <Profile
          className='w-44'
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
      </div>
      <div
        className={clsx(
          'flex w-20 items-center',
          isItemReversed && 'flex-row-reverse',
        )}
      >
        <span className='mx-3 h-6 w-px bg-slate-200' />
        <span className={clsx('text-lg font-semibold', getTimerColor())}>
          {minutesString}:{secondsString}
        </span>
      </div>
    </div>
  );
}

interface PlayerInfoProps {
  isItemReversed: boolean;
  isTimerRunning: boolean;
  onTimeOver: () => void;
  playerInfo: {
    name: string;
    symbol: string;
    rating: string;
    avatar: string;
  };
}
