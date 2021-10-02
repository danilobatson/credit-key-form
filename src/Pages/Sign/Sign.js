import React from 'react';
import './Sign.scss';
import SignUp from '../../Components/SignUp/SignUp'
function Sign() {

	return (
		<div className='sign-in-and-sign-up' data-testid='SignUp'>
			<SignUp />
			<div className='register-form'></div>
		</div>
	);
}

export default Sign;
