import { CircleIcon } from '../new-game/ui/assets/svg/circle-icon';
import { CrossIcon } from '../new-game/ui/assets/svg/cross-icon';
import { SquareIcon } from '../new-game/ui/assets/svg/square-icon';
import { TriangleIcon } from '../new-game/ui/assets/svg/triangle-icon';
import { GAME_SYMBOLS } from './constants';

interface GameSymbolProps {
  symbol: string;
  className?: string;
}

export const GameSymbol = ({ symbol, className }: GameSymbolProps) => {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.CIRCLE]: CircleIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;
  return <Icon className={className} />;
};
