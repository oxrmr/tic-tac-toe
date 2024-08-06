import { UIModal } from '@/app/uikit';
import {
  UIButton,
  UIButtonVariants,
  UIButtonSizes,
} from '@/app/uikit/ui-button/ui-button';
import { UIModalSizes } from '@/app/uikit/ui-modal/ui-modal';

export function GameOverModal() {
  return (
    <UIModal width={UIModalSizes.md}>
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
  );
}
