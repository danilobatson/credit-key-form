import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<button
		data-testid='button'
		className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
		{...otherProps}>
		{children}
	</button>
);

export default CustomButton;
