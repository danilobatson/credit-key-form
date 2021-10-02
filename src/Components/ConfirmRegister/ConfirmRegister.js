import React from 'react'
import FormInput from '../FormInput/FormInput';

function ConfirmRegister({firstName, lastName, email, phoneNumber}) {

  return (
		<div className='sign-up'>
			<h2 className='title'>Thank you for registering!</h2>
			<form className='sign-up-form'>
				<FormInput
					readOnly
					type='text'
					name='firstName'
					value={firstName}
					label={'FIRST NAME:'}
				/>
				<FormInput
					readOnly
					type='text'
					name='lastName'
					value={lastName}
					label={'LAST NAME:'}
				/>
				<FormInput
					readOnly
					type='email'
					name='email'
					value={email}
					label={'EMAIL:'}
				/>
				<FormInput
					readOnly
					type='text'
					name='phoneNumber'
					value={phoneNumber}
					label={'PHONE NUMBER'}
				/>
			</form>
		</div>
	);
}

export default ConfirmRegister
