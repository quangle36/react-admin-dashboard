import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IUser {
  id: string,
  email: string,
  role: string
}

export interface AppState {
  user: IUser | null,
  isLoading: boolean
}

const initialState: AppState = {
  user: null,
  isLoading: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setLoading } = appSlice.actions

export default appSlice.reducer