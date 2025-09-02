import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Settings from '../pages/settings'
import { Provider } from 'react-redux'
import { store } from '../store'

test('toggles category selection and saves', () => {
  render(<Provider store={store}><Settings /></Provider>)
  const techBtn = screen.getByText('technology')
  fireEvent.click(techBtn)
  const save = screen.getByText('Save')
  fireEvent.click(save)
  // expect no crash and button still visible
  expect(screen.getByText('Save')).toBeInTheDocument()
})
