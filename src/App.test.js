import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders div container of Sign screen in the App.js file ', () => {
	render(<App />);
	const app = screen.getByTestId('sign');
	expect(app).toBeInTheDocument();
});
