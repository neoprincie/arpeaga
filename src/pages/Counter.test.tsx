import React from 'react'
import { render, screen } from '@testing-library/react'
import Counter from './Counter'

test('renders without crashing', () => {
  const { baseElement } = render(<Counter />)
  expect(baseElement).toBeDefined()
})