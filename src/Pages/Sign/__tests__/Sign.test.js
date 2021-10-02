import { render, screen } from '@testing-library/react';
import Sign from '../Sign';

test('enders div container of SignUp component in the Sign.js file', () => {
	render(<Sign />);
	const sign = screen.getByTestId('SignUp');
	expect(sign).toBeInTheDocument();
});
