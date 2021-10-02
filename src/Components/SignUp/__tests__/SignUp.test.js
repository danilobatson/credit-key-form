import { render, screen } from '@testing-library/react';
import SignUp from '../SignUp';

test('Renders div container in sign screen containing SignUp component', () => {
	render(<SignUp />);
	const signUp = screen.getByText('Sign up with your email and password');
	expect(signUp).toBeInTheDocument();

});

test('Renders ul tag password format request', () => {
	render(<SignUp />);
	const password = screen.getByText('Password Requested Format:');
	expect(password).toBeInTheDocument();

});

test('Renders heading "Register for an account"', () => {
	render(<SignUp />);

	const account = screen.getByText('Register for an account');
	expect(account).toBeInTheDocument();
});
