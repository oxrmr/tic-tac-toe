import type { FC } from 'react';
import { HistoryIcon } from './assets/svg/history-icon';
import { StarIcon } from './assets/svg/star-icon';
import { UserIcon } from './assets/svg/user-icon';

interface GameInfoProps {
  playersCount: number;
  isRatingGame: boolean;
  timeMode: string;
}

export const GameInfo: FC<GameInfoProps> = props => {
  return (
    <div className='flex items-center gap-3 text-xs text-slate-400'>
      {props.isRatingGame && <StarIcon />}
      <div className='flex items-center gap-1'>
        <UserIcon /> {props.playersCount}
      </div>
      <div className='flex items-center gap-1'>
        <HistoryIcon />
        {props.timeMode}
      </div>
    </div>
  );
};
