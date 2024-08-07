import Link from 'next/link';
import { ArrowLeft } from './assets/svg/arrow-left';

export const BackLink = () => {
  return (
    <Link
      className='flex items-center gap-2 text-xs text-teal-600'
      href='/'
    >
      <ArrowLeft />
      Home
    </Link>
  );
};
