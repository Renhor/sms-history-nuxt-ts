import { IHistory } from '~/store/types'

export const state = () => ({
  history: [] as IHistory,
})

export type RootState = ReturnType<typeof state>

export default state
