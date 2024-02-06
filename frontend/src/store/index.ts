// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducer
import table from './table'

export const store = configureStore({
  reducer: {
    table
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>