import {render, screen} from '@testing-library/react'
import App from './App'

test('renders the heading element', () => {
  render(<App />)
  const headingElement = screen.getByText(/learners/i)
  expect(headingElement).toBeInTheDocument()
})
