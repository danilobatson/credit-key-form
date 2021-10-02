import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import ConfirmRegister from '../ConfirmRegister/ConfirmRegister';
import './SignUp.scss';

function SignUp() {
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		phoneNumber: '',
		redirect: false,
	});
	const {
		firstName,
		lastName,
		email,
		phoneNumber,
		password,
		confirmPassword,
		redirect,
	} = state;


	const handleSubmit = (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		try {
			setState((prev) => {
				return { ...prev, redirect: true };
			});

			return (
				<ConfirmRegister
					firstName={firstName}
					lastName={lastName}
					email={email}
					phoneNumber={phoneNumber}
				/>
			);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (event) => {
		const { value, name } = event.target;

		setState((prev) => {
			const update = { [name]: value };
			return { ...prev, ...update };
		});
	};

if (redirect) {
	return (
		<div>
			<ConfirmRegister
				firstName={firstName}
				lastName={lastName}
				email={email}
				phoneNumber={phoneNumber}
			/>
		</div>
	);
}
	return (
		<div className='sign-up'>
			<h2 className='title'>Register for an account</h2>
			<span>Sign up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					required
					type='text'
					name='firstName'
					value={firstName}
					label='First Name'
					onChange={handleChange}
				/>
				<FormInput
					required
					type='text'
					name='lastName'
					value={lastName}
					label='Last Name'
					onChange={handleChange}
				/>
				<FormInput
					required
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
				/>
				<FormInput
					required
					type='text'
					name='phoneNumber'
					maxlength='14'
					pattern='\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$'
					value={phoneNumber}
					onChange={handleChange}
					label='Phone Number (XXX) XXX-XXXX'
				/>
				<FormInput
					required
					type='password'
					name='password'
					pattern='(?=.*\d)(?=.*[A-Z]).{8,}'
					value={password}
					onChange={handleChange}
					label='Password'
				/>
				<FormInput
					required
					type='password'
					name='confirmPassword'
					pattern='(?=.*\d)(?=.*[A-Z]).{8,}'
					value={confirmPassword}
					onChange={handleChange}
					label='Password Confirmation'
				/>
				<ul>
					Password Requested Format:
					<li>One uppercase letter</li>
					<li>One digit </li>
					<li>Be a minimum of 8 characters</li>
				</ul>
				<CustomButton type='submit'>Sign Up</CustomButton>
			</form>
		</div>
	);
}

export default SignUp;
