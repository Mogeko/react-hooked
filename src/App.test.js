import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './component/App'

test('Title', () => {
  render(<App />)
  const linkElement = screen.getByText('HOOKED')
  expect(linkElement).toBeInTheDocument()
})

test('Hint', () => {
  render(<App />)
  const linkElement = screen.getByText('Sharing a few of our favourite movies')
  expect(linkElement).toBeInTheDocument()
})

test('Loading', () => {
  render(<App />)
  const linkElement = screen.getByText('loading...')
  expect(linkElement).toBeInTheDocument()
})
