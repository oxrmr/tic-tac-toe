import { GAME_SYMBOLS } from '../constants';
import { CircleIcon } from '../ui/assets/svg/circle-icon';
import { CrossIcon } from '../ui/assets/svg/cross-icon';
import { SquareIcon } from '../ui/assets/svg/square-icon';
import { TriangleIcon } from '../ui/assets/svg/triangle-icon';

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
