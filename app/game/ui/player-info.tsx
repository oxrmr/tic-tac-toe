import { GameSymbol } from '@/app/game/game-symbol/game-symbol';
import { useNow } from '@/app/lib/timers';
import clsx from 'clsx';
import { type FC } from 'react';

export type Player = {
  name: string;
  symbol: string;
  rating: string;
  avatar: string;
};

interface PlayerInfoProps extends Player {
  isItemReversed: boolean;
  timer: number;
  timerStartAt: number;
}

export const PlayerInfo: FC<PlayerInfoProps> = props => {
  const now = useNow(1000, props.timerStartAt);
  const ms = Math.max(now ? props.timer - (now - props.timerStartAt) : props.timer, 0);
  const seconds = Math.ceil(ms / 1000);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsString = String(seconds % 60).padStart(2, '0');

  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (props.timerStartAt) {
      return isDanger ? 'text-orange-600' : 'text-slate-900';
    }
    return 'text-slate-200';
  };

  return (
    <div
      className={clsx(
        'flex items-center justify-between',
        props.isItemReversed && 'flex-row-reverse',
      )}
    >
      <div className='relative'>
        <div className='shadow-xs absolute -left-px -top-px flex h-5 w-5 items-center justify-center rounded-full bg-white p-1'>
          <GameSymbol symbol={props.symbol} />
        </div>
        <div className={'flex w-44 items-center gap-2 text-start text-teal-600'}>
          <div className='h-12 w-12 rounded-full bg-slate-200' />
          {props.avatar}
          <div className='overflow-hidden'>
            <div className='truncate text-lg leading-tight'>{props.name}</div>
            <div className='text-xs leading-tight text-slate-400'>Rating: {props.rating}</div>
          </div>
        </div>
      </div>
      <div className={clsx('flex w-20 items-center', props.isItemReversed && 'flex-row-reverse')}>
        <span className='mx-3 h-6 w-px bg-slate-200' /> {/*  DIVIDER   */}
        <span className={clsx('text-lg font-semibold', getTimerColor())}>
          {minutesString}:{secondsString}
        </span>
      </div>
    </div>
  );
};
