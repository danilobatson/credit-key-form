import { render, screen } from '@testing-library/react';
import Sign from '../Sign';

test('Renders component Custom Button that contains a data-testid of "button"', () => {
	render(<Sign />);
	const sign = screen.getByTestId('button');
	expect(sign).toBeInTheDocument();
});
