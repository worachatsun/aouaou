export enum BUTTON_TYPE {
  S,
  M,
  L,
}

export const BUTTON_SIZE = {
  [BUTTON_TYPE.L]: {
    width: 72,
    height: 72,
    fontSize: 32,
    borderRadius: '15px',
  },
  [BUTTON_TYPE.M]: {
    width: 56,
    height: 56,
    fontSize: 24,
    borderRadius: '15px',
  },
  [BUTTON_TYPE.S]: {
    width: 32,
    height: 32,
    fontSize: 16,
    borderRadius: '10px',
  },
} as const;
