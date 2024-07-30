import Link from 'next/link';
import type { FC } from 'react';
import { ArrowLeft } from './assets/svg/arrow-left';
import { HistoryIcon } from './assets/svg/history-icon';
import { StarIcon } from './assets/svg/star-icon';
import { UserIcon } from './assets/svg/user-icon';
import clsx from 'clsx';

interface TitleProps {
  playersCount: number;
  className?: string;
}

export const Title: FC<TitleProps> = ({ playersCount, className }) => {
  return (
    <div className={clsx('pl-2', className)}>
      <Link
        className='flex items-center gap-2 text-xs text-teal-600'
        href='/'
      >
        <ArrowLeft /> Home
      </Link>
      <h1 className='mb-1 text-4xl leading-tight'>Tic Tac Toe</h1>
      <div className='flex items-center gap-3 text-xs text-slate-400'>
        <StarIcon />
        <div className='flex items-center gap-1'>
          <UserIcon /> {playersCount}
        </div>
        <div className='flex items-center gap-1'>
          <HistoryIcon />1 min for the move
        </div>
      </div>
    </div>
  );
};
