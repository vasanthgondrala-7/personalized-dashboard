import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PreferencesState = {
  categories: string[]
  darkMode: boolean
  favorites: string[]
}

const initialState: PreferencesState = {
  categories: ['technology', 'general'],
  darkMode: false,
  favorites: []
}

const slice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<string[]>) {
      state.categories = action.payload
    },
    toggleDark(state) {
      state.darkMode = !state.darkMode
    },
    addFavorite(state, action: PayloadAction<string>) {
      if (!state.favorites.includes(action.payload)) state.favorites.push(action.payload)
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(id => id !== action.payload)
    }
  }
})

export const { setCategories, toggleDark, addFavorite, removeFavorite } = slice.actions
export default slice.reducer
