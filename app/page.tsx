'use client';

import { useEffect, useState } from 'react';
import { Field, ParticipantsInfo, Title, useGameState } from './game';
import { Header } from './header/index';
import { log } from 'console';

export default function Home() {
  const [playersCount, setPlayersCount] = useState(4);
  const gameState = useGameState(playersCount);

  return (
    <>
      <Header />
      <main className='mx-auto min-h-screen max-w-[616px] pt-6'>
        <Title
          className='mb-4'
          playersCount={playersCount}
        />
        <ParticipantsInfo
          className='mb-6'
          currentMove={gameState.currentMove}
          playersCount={playersCount}
        />
        <Field gameState={gameState} />
      </main>
    </>
  );
}
