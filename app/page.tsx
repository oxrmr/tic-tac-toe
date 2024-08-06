'use client';

import { type ReactNode } from 'react';
import { Header } from './header/index';
import { Game } from './new-game';

export default function Home() {
  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  );
}

function HomePageLayout(
  props: Readonly<{
    header: ReactNode;
    children: ReactNode;
  }>,
) {
  return (
    <div className='min-h-screen bg-slate-50'>
      {props.header}
      <main className='mx-auto min-h-screen max-w-[616px] pt-6'>
        {props.children}
      </main>
    </div>
  );
}
