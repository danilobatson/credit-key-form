import { render, screen } from '@testing-library/react';
import FormInput from '../FormInput';

test('Renders FormInput component that contains a data-testid of "form-input"', () => {
	render(<FormInput />);
	const formInput = screen.getByTestId('form-input');
	expect(formInput).toBeInTheDocument();
});
