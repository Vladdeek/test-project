import React, { useState } from 'react'
import '../styles/components/AuthWindow.css'

const AuthWindow = () => {
	const [isLogin, setIsLogin] = useState(true)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const toggleAuthMode = () => {
		setIsLogin(!isLogin)
	}

	const handleSubmit = event => {
		event.preventDefault()
		isLogin ? handleLogin() : handleRegister()
	}

	const checkUserExists = async email => {
		try {
			let response = await fetch(`/users/${email}`)
			return response.ok
		} catch (error) {
			console.error('Ошибка запроса:', error)
			return false
		}
	}

	const handleLogin = async () => {
		if (!email || !password) {
			alert('Заполните все поля!')
			return
		}
		if (await checkUserExists(email)) {
			try {
				let response = await fetch('/auth/', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email, password }),
				})

				let data = await response.json()
				if (response.ok) {
					alert('Добро пожаловать, ' + data.email)
					localStorage.setItem('userEmail', data.email)
				} else {
					alert('Ошибка: ' + data.detail)
				}
			} catch (error) {
				console.error('Ошибка запроса:', error)
			}
			return
		}
	}

	const handleRegister = async () => {
		if (!email || !password) {
			alert('Заполните все поля!')
			return
		}
		if (await checkUserExists(email)) {
			alert('Пользователь уже существует!')
			return
		}

		let userData = { email, password }
		console.log(userData)

		try {
			let response = await fetch('/users/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(userData),
			})

			if (response.ok) {
				alert('Регистрация успешна!')
			} else {
				let errorData = await response.json()
				alert('Ошибка: ' + errorData.detail)
			}
		} catch (error) {
			console.error('Ошибка запроса:', error)
		}
	}

	return (
		<form
			className='reg-form d-flex flex-column align-items-center'
			onSubmit={handleSubmit}
		>
			<p className='auth-title'>{isLogin ? 'Вход' : 'Регистрация'}</p>
			<input
				className='auth-input'
				type='email'
				placeholder='example@email.com'
				required
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				className='auth-input'
				type='password'
				placeholder='password'
				required
				value={password}
				onChange={e => setPassword(e.target.value)}
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
	)
}

export default AuthWindow
