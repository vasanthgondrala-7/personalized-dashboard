import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '../components/Card'
import { Provider } from 'react-redux'
import { store } from '../store'

test('renders card with title and description', () => {
  const item = { id: 't-1', title: 'Test Title', description: 'Test description' }
  render(<Provider store={store}><Card item={item} /></Provider>)
  expect(screen.getByText('Test Title')).toBeInTheDocument()
  expect(screen.getByText('Test description')).toBeInTheDocument()
})
