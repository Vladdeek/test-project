import React, { useState } from 'react'
import '../styles/components/SideBar.css'

const SideBar = ({ name }) => {
	const imagePath = ''
	return (
		<div className='side-bar d-flex flex-column align-items-start'>
			<div className='side-bar-con-info '>
				<div className='profile-con'>
					<div className='profile d-flex justify-content-between align-items-center'>
						<img
							className='profile-img'
							src={
								imagePath.length === 0
									? 'https://placehold.co/40x40'
									: imagePath
							}
							alt='...'
						/>
						<p className='profile-name'>{name}</p>
					</div>
				</div>
				<div className='btns-con d-flex flex-column justify-content-center align-items-center'>
					<button className='main-btn text-start'>Задачи</button>
					<button className='main-btn text-start'>Проекты</button>
					<button className='main-btn text-start'>Команды</button>
				</div>
			</div>
		</div>
	)
}

export default SideBar
