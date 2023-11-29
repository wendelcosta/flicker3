import { render, screen } from '@testing-library/react'
import App from './'

test('renders the app', () => {
	render(<App />)
	const textElement = screen.getByText('Flicker Sample')
	expect(textElement).toBeInTheDocument()
})
