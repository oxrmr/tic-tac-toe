import type { FC } from 'react';

interface ProfileProps {
  name: string;
  rating: string;
  avatar: string;
  className?: string;
}

export const Profile: FC<ProfileProps> = ({
  name,
  rating,
  avatar = '',
  className,
}) => {
  return (
    <div
      className={`${className} flex items-center gap-2 text-start text-teal-600`}
    >
      <div className='h-12 w-12 rounded-full bg-slate-200' />
      {avatar}
      <div className='overflow-hidden'>
        <div className='truncate text-lg leading-tight'>{name}</div>
        <div className='text-xs leading-tight text-slate-400'>
          Rating: {rating}
        </div>
      </div>
    </div>
  );
};
