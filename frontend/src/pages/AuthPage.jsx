import React from 'react'
import AuthWindow from '../components/AuthWindow'
import '../styles/pages/AuthPage.css'

const AuthPage = ({}) => {
	return (
		<>
			<div className='auth-con d-flex justify-content-center align-items-center'>
				<div className='d-flex'>
					<AuthWindow />
				</div>
			</div>
		</>
	)
}

export default AuthPage
