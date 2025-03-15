import React from 'react'
import ReactDOM from 'react-dom/client'

//Импорт стилей
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'

//Импорт страниц
import AuthPage from './pages/AuthPage'
import MainPage from './pages/MainPage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<>
		<MainPage />
	</>
)
