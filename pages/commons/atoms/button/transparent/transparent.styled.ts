import { COLOR } from 'global/constants';

export const button = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${COLOR.GREY.PRIMARY}`,
  '&:hover': {
    opacity: [0.9, 0.8, 0.7],
  },
};
