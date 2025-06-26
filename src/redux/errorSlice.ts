import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ErrorState {
  // errorCode: 'ECONNABORTED' | '404' | '500' | '403' | '401' | null
  errorCode: string | null
}

const initialState: ErrorState = {
  errorCode: null
}

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setErrorCode: (state, action: PayloadAction<string | null>) => {
      state.errorCode = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setErrorCode } = errorSlice.actions

export default errorSlice.reducer