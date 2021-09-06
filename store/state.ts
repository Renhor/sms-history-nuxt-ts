import { IAppBalance, IHistory } from '~/store/types';

export const state = () => ({
  history: [] as IHistory,
  searchString: '',
  balance: {
    frozen: 1600,
    actual: 200
  } as IAppBalance
});

export type RootState = ReturnType<typeof state>

export default state;
