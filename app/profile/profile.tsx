import type { FC } from 'react';

interface ProfileProps {
  name: string;
  rating: string;
  avatar: string;
  isRight: boolean;
  className?: string;
}

export const Profile: FC<ProfileProps> = ({ name, rating, avatar = '', isRight, className }) => {
  return (
    <div className={`${className} ml-auto flex items-center gap-2 text-start text-teal-600`}>
      <div className={'h-12 w-12 rounded-full bg-slate-200 '} />
      {avatar}
      <div className='overflow-hidden'>
        <div className="text-lg leading-tight truncate">{name}</div>
        <div className={'text-xs leading-tight text-slate-400'}>Rating: {rating}</div>
      </div>
    </div>
  );
};
