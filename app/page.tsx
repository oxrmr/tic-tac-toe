'use client';

import { useState } from 'react';
import { GameField, GamePlayers, GameTitle, useGameState } from './game';
import { Header } from './header/index';

export default function Home() {
  const [playersCount, setPlayersCount] = useState(3);
  const gameState = useGameState(playersCount);

  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-[616px] pt-6">
        <GameTitle className="mb-4" playersCount={playersCount} />
        <GamePlayers className="mb-6" currentMove={gameState.currentMove} playersCount={playersCount} />
        <GameField gameState={gameState} />
      </main>
    </>
  );
}
