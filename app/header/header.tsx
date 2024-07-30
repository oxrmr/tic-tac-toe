import { Profile } from '../profile/profile';
import {
  UIButton,
  UIButtonSizes,
  UIButtonVariants,
} from '../uikit/ui-button/ui-button';
import { ArrowDown } from './assets/arrow-down';
import { Logo } from './assets/logo';

export const Header = () => {
  return (
    <header className='shadow-xs flex h-24 items-center bg-white px-8'>
      <Logo />
      <div className='mx-6 h-8 w-px bg-slate-200' />
      <UIButton
        className='w-44'
        variant={UIButtonVariants.primary}
        size={UIButtonSizes.large}
      >
        Play
      </UIButton>
      <button className='ml-auto flex items-center gap-2 text-teal-600 transition-colors hover:text-teal-500'>
        <Profile
          name='MixCherry'
          rating='2333'
          avatar=''
        />
        <ArrowDown />
      </button>
    </header>
  );
};
