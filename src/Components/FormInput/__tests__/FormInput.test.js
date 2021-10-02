import { render, screen } from '@testing-library/react';
import FormInput from '../FormInput';

test('renders learn react link', () => {
	render(<FormInput />);
	const formInput = screen.getByTestId('form-input')
	expect(formInput).toBeInTheDocument();

});
