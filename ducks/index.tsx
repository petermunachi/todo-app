import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateT } from 'redux/store'

export interface WebAppI {
  value: number
  incrementAmount: number
}

const initialState: WebAppI = {
  value: 0,
  incrementAmount: 1
}

export const webAppSlice = createSlice({
  name: 'webApp',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.incrementAmount
    },
    decrement: (state) => {
      state.value -= state.incrementAmount
    },
    changeIncrementAmount: (state, action: PayloadAction<number>) => {
      state.incrementAmount = action.payload
    },
  },
})

export const { increment, decrement, changeIncrementAmount } = webAppSlice.actions

// Other code such as selectors can use the imported `RootStateT` type
export const selectWebApp = (state: RootStateT): WebAppI =>
  state.webApp;

export default webAppSlice.reducer
