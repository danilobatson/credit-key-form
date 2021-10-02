import { render, screen } from '@testing-library/react';
import CustomButton from '../CustomButton';

test('Renders component Custom Button that contains a data-testid of "button"', () => {
	render(<CustomButton />);
	const customButton = screen.getByTestId('button');
	expect(customButton).toBeInTheDocument();
});
