import React, { useState } from 'react'
import '../styles/components/AuthWindow.css'

const AuthWindow = () => {
	const [isLogin, setIsLogin] = useState(true) // Состояние для переключения между авторизацией и регистрацией
	// Функция для переключения состояния
	const toggleAuthMode = () => {
		setIsLogin(!isLogin)
	}

	// Функция для обработки отправки формы
	const handleSubmit = event => {
		event.preventDefault()
		isLogin ? handleLogin() : handleRegister()
	}

	const handleLogin = () => {
		//запрос для авторизации
		console.log('Авторизация')
	}
	const handleRegister = () => {
		//запрос для регистрации
		console.log('Регистрация')
	}

	return (
		<>
			<form
				className='reg-form d-flex flex-column align-items-center'
				onSubmit={handleSubmit} // Обработчик формы
			>
				<p className='auth-title'>{isLogin ? 'Вход' : 'Регистрация'}</p>
				<input
					className='auth-input'
					type='email'
					placeholder='example@email.com'
					required
				/>
				<input
					className='auth-input'
					type='password'
					placeholder='password'
					required
				/>

				<p className='auth-with'>
					{isLogin ? 'Авторизоваться с помощью' : 'Создать аккаунт с помощью'}
				</p>

				<div className='auth-with-icons'>
					<img
						className='round-img github'
						src='/assets/images/github-logo.svg'
						alt='GitHub'
					/>
					<img
						className='round-img google'
						src='/assets/images/google-logo.svg'
						alt='Google'
					/>
					<img
						className='round-img vk'
						src='/assets/images/vk-logo.svg'
						alt='VK'
					/>
					<img
						className='round-img yandex'
						src='/assets/images/yandex-logo.svg'
						alt='Yandex'
					/>
				</div>
				<input
					className='auth-submit'
					type='submit'
					value={isLogin ? 'Подтвердить' : 'Зарегистрироваться'}
				/>
				<p className='auth-toggle-link' onClick={toggleAuthMode}>
					{isLogin ? 'У меня уже есть аккаунт' : 'Создать новый аккаунт'}
				</p>
			</form>
		</>
	)
}

export default AuthWindow
