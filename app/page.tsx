'use client';

import { useState } from 'react';
import { Field, ParticipantsInfo, Title, useGameState } from './game';
import { Header } from './header/index';
import { UIModal } from './uikit';
import {
  UIButton,
  UIButtonSizes,
  UIButtonVariants,
} from './uikit/ui-button/ui-button';
import { UIModalSizes } from './uikit/ui-modal/ui-modal';

export default function Home() {
  const [playersCount, setPlayersCount] = useState(3);
  const gameState = useGameState(playersCount);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <UIModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        width={UIModalSizes.md}
      >
        <UIModal.Header>Game over!</UIModal.Header>
        <UIModal.Body>
          <div className='text-sm'>
            Winner: <span className='text-teal-600'>Dodik</span>
          </div>
        </UIModal.Body>
        <UIModal.Footer>
          <UIButton
            variant={UIButtonVariants.outlined}
            size={UIButtonSizes.medium}
          >
            Back
          </UIButton>
          <UIButton
            variant={UIButtonVariants.primary}
            size={UIButtonSizes.medium}
          >
            Play again
          </UIButton>
        </UIModal.Footer>
      </UIModal>
      <button
        type='button'
        onClick={() => setIsModalOpen(true)}
      >
        openModal
      </button>
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
