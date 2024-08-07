import { UIModal } from '@/app/uikit';
import {
  UIButton,
  UIButtonSizes,
  UIButtonVariants,
} from '@/app/uikit/ui-button/ui-button';
import { UIModalSizes } from '@/app/uikit/ui-modal/ui-modal';
import type { FC } from 'react';

interface GameOverModalProps {
  winnerName: string;
  playersList: any[];
}

export const GameOverModal: FC<GameOverModalProps> = props => {
  return (
    <UIModal
      width={UIModalSizes.md}
      isOpen={!!props.winnerName}
      onClose={() => !!(props.winnerName = '')}
    >
      <UIModal.Header>Game over!</UIModal.Header>
      <UIModal.Body>
        <div className='text-sm'>
          Winner: <span className='text-teal-600'>{props.winnerName}</span>
        </div>
        <div
          className={
            'shadow-xs mb-4 grid grid-cols-2 gap-4 rounded-2xl bg-white px-8 py-4'
          }
        >
          {props.playersList}
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
  );
};
