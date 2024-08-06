import type { FC, ReactNode } from 'react';

interface GameLayoutProps {
  backLink: ReactNode;
  title: ReactNode;
  gameInfo: ReactNode;
  playersList: ReactNode;
  gameMoveInfo: any;
  gameCells: any;
}

export const GameLayout: FC<GameLayoutProps> = props => {
  return (
    <div>
      <div className={'mb-4 pl-2'}>
        {props.backLink}
        {props.title}
        {props.gameInfo}
      </div>
      <div
        className={
          'shadow-xs mb-4 grid grid-cols-2 gap-4 rounded-2xl bg-white px-8 py-4'
        }
      >
        {props.playersList}
      </div>
      <div className={'rounded-2xl bg-white px-5 pb-7 pt-5 shadow-md'}>
        <div className='flex items-center gap-3'>
          <div className='mb-2 flex justify-between'>{props.gameMoveInfo}</div>
          {/* {props.actions} */}
        </div>
        <div className='grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)]'>
          {props.gameCells}
        </div>
      </div>
    </div>
  );
};
