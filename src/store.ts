import { configureStore } from '@reduxjs/toolkit'
import appReducer from './redux/appSlice';
import errorReducer from './redux/errorSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    error: errorReducer
  },
})

/*
state = {
  app: {
    user,
    isLoading
  }
}
*/

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;