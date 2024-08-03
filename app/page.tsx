'use client';

import { useState } from 'react';
import { Field, ParticipantsInfo, Title, useGameState } from './game';
import { Header } from './header/index';

export default function Home() {
  const [playersCount, setPlayersCount] = useState(3);
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
          isWinner={!!gameState.winnerSymbol}
          onPlayerTimeOver={gameState.handlePlayerTimeOver}
        />
        <Field gameState={gameState} />
      </main>
    </>
  );
}
