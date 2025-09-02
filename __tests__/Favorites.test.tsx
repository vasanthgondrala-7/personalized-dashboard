import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Favorites from '../pages/favorites'
import { Provider } from 'react-redux'
import { store } from '../store'
import { setFeed } from '../store/slices/feedSlice'
import { addFavorite } from '../store/slices/preferencesSlice'

test('shows favorite item', () => {
  // prepare store
  store.dispatch(setFeed([{ id: 'n-1', type: 'news', title: 'Fav Title', description: 'desc' }]))
  store.dispatch(addFavorite('n-1'))
  render(<Provider store={store}><Favorites /></Provider>)
  expect(screen.getByText('Fav Title')).toBeInTheDocument()
})
