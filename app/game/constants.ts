export const PLAYERS_COUNT = 2;


export enum GAME_SYMBOLS {
  CROSS = 'cross',
  CIRCLE = 'circle',
  TRIANGLE = 'triangle',
  SQUARE = 'square',
}

export const MOVES_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.CIRCLE,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
  {
    name: 'Jot',
    symbol: GAME_SYMBOLS.CROSS,
    rating: '1000',
    avatar: '',
  },
  {
    name: 'Shannon',
    symbol: GAME_SYMBOLS.CIRCLE,
    rating: '1000',
    avatar: '',
  },
  {
    name: 'Suzann',
    symbol: GAME_SYMBOLS.TRIANGLE,
    rating: '1000',
    avatar: '',
  },
  {
    name: 'Mik',
    symbol: GAME_SYMBOLS.SQUARE,
    rating: '1000',
    avatar: '',
  },
];
