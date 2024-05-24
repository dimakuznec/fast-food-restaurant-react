import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logoImg from './../../images/icons/logo.png'

import './header.css'

function Header() {
	const [burgerActive, setBurgerActive] = useState(false)
	const [menuActive, setMenuActive] = useState(false)

	const toggleMenu = () => {
		setBurgerActive(!burgerActive)
		setMenuActive(!menuActive)
		if (menuActive) {
			document.body.classList.add('lock')
		} else {
			document.body.classList.remove('lock')
		}
	}

	return (
		<div className='wrapper'>
			<header className='header'>
				<div className='container'>
					<div className='header__body'>
						<NavLink to='Home' className='header__logo'>
							<img src={logoImg} alt='logo' />
						</NavLink>
						<button
							className={`header__burger ${burgerActive ? 'active' : ''}`}
							onClick={toggleMenu}
							type='button'
							title='Open menu'
						>
							<span className='visually-hidden'>Open menu</span>
							<span></span>
						</button>
						<nav className={`header__menu ${menuActive ? 'active' : ''}`}>
							<ul className='header__list'>
								<li>
									<NavLink to='Home' className='header__link'>
										HOME
									</NavLink>
								</li>
								<li>
									<NavLink to='/PAGES' className='header__link'>
										PAGES
									</NavLink>
								</li>
								<li>
									<NavLink to='/OUROFFER' className='header__link'>
										OUR OFFER
									</NavLink>
								</li>
								<li>
									<NavLink to='/PRICING' className='header__link'>
										PRICING
									</NavLink>
								</li>
								<li>
									<NavLink to='/SHOP' className='header__link'>
										SHOP
									</NavLink>
								</li>
							</ul>
						</nav>
						<button className='button'>Order now</button>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
