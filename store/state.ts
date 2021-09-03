import { IHistory } from '~/store/types'

export const state = () => ({
  history: [] as IHistory,
  balance: {
    frozen: 1600,
    actual: 200
  }
})

export type RootState = ReturnType<typeof state>

export default state
