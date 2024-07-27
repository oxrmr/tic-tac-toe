import { useEffect, useState } from 'react';
import { setInterval } from 'timers';
import { players } from '../../db';
import type { GAME_SYMBOLS } from '../game-symbol/constants';
import { GameSymbol } from '../game-symbol/game-symbol';
import { Profile } from '../profile/profile';

interface GameInfoProps {
  currentMove: GAME_SYMBOLS;
  playersCount: number;
  className?: string;
}

export const GamePlayers = ({ playersCount, currentMove, className }: GameInfoProps) => {
  return (
    <div className={`${className} shadow-xs grid grid-cols-2 gap-4 rounded-2xl bg-white px-8 py-4`}>
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.name}
          playerInfo={player}
          isRight={index % 2 === 1}
          isTimerRunning={currentMove === player.symbol}
        />
      ))}
    </div>
  );
};

interface PlayerInfoProps {
  isRight: boolean;
  isTimerRunning: boolean;
  playerInfo: {
    name: string;
    symbol: string;
    rating: string;
    avatar: string;
  }
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning }: PlayerInfoProps) {
  const [seconds, setSeconds] = useState(60);

  const secondsString = String(seconds % 60).padStart(2, '0');
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');

  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const intervalId = setInterval(() => {
        setSeconds(s => Math.max(s - 1, 0));
      }, 1000);

      return () => {
        clearInterval(intervalId);
        setSeconds(60);
      };
    };

  }, [isTimerRunning]);

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? 'text-orange-600' : 'text-slate-900';
    }
    return 'text-slate-200';
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`relative ${isRight && 'order-3'}`}>
        <div className="shadow-xs absolute -left-px -top-px flex h-5 w-5
         items-center justify-center rounded-full bg-white p-1"
        >
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
          isRight={isRight}
        />
      </div>
      <span className={`h-6 w-px bg-slate-200 ${isRight && 'order-2'} `} />
      <span className={`text-lg font-semibold ${isRight && 'order-1'}
         ${getTimerColor()}`}
      >
        {minutesString}:{secondsString}
      </span>
    </div>
  );
}

