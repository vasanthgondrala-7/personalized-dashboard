import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import preferences from './slices/preferencesSlice'
import feed from './slices/feedSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  preferences,
  feed,
})

const persisted = persistReducer({ key: 'root', storage }, rootReducer)

export const store = configureStore({
  reducer: persisted,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
