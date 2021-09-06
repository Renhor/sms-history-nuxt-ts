import { IAppBalance, IHistory, OperationType } from '~/store/types';

export const state = () => ({
  history: [] as IHistory,
  searchString: '' as string,
  operationType: 'all' as OperationType,
  initialPage: 1,
  balance: {
    frozen: 1600,
    actual: 200
  } as IAppBalance
});

export type RootState = ReturnType<typeof state>

export default state;
