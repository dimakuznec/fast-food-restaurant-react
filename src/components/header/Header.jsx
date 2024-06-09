import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Order from '../Order/Order'
import cartImg from './../../images/cart-large.svg'
import logoImg from './../../images/icons/logo.png'
import './header.css'

function Header(props) {
	const [burgerActive, setBurgerActive] = useState(false)
	const [menuActive, setMenuActive] = useState(false)
	const [cartOpen, setCartOpen] = useState(false)
	const [totalPrice, setTotalPrice] = useState(0)
	const [orderConfirmed, setOrderConfirmed] = useState(false)
	const [emptyCartMessage, setEmptyCartMessage] = useState(false)

	useEffect(() => {
		const total = props.orders.reduce((sum, item) => {
			const price = parseFloat(item.price.replace('$', ''))
			return sum + price * item.count
		}, 0)
		setTotalPrice(total)
	}, [props.orders])

	function toggleMenu() {
		setBurgerActive(!burgerActive)
		setMenuActive(!menuActive)
		if (menuActive) {
			document.body.classList.add('lock')
		} else {
			document.body.classList.remove('lock')
		}
	}

	function handleCartOpen() {
		setCartOpen(!cartOpen)
	}

	function handleOrderConfirm() {
		if (props.orders.length === 0) {
			setEmptyCartMessage(true)
			setTimeout(() => {
				setEmptyCartMessage(false)
			}, 3000)
			return
		}
		setOrderConfirmed(true)
		setTimeout(() => {
			setOrderConfirmed(false)
			props.onClear()
		}, 3000)
	}

	return (
		<div className='wrapper'>
			<header className='header'>
				<div className='container'>
					<div className='header__body'>
						<NavLink to='Home' className='header__logo'>
							<img src={logoImg} alt='logo' />
						</NavLink>
						<div>
							<button
								onClick={handleCartOpen}
								className={`header__link cart__img__button ${
									cartOpen ? 'active' : ''
								}`}
							>
								<img src={cartImg} alt='Cart' />
							</button>
						</div>
						{cartOpen && (
							<div className='shop_cart'>
								{props.orders.map(el => (
									<Order
										key={el.id}
										item={el}
										onRemove={props.onRemove}
										onAdd={props.onAdd}
									/>
								))}
								<div className='total-price'>
									Total Price: ${totalPrice.toFixed(2)}
								</div>
								<button onClick={props.onClear} className='clear-cart'>
									Clear Cart
								</button>
								<button onClick={handleOrderConfirm} className='confirm-order'>
									Confirm Order
								</button>
							</div>
						)}
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
			{orderConfirmed && (
				<div className='order-confirmation'>
					<FaCheckCircle className='check-icon' />
					<p>Thank you for your purchase!</p>
				</div>
			)}
			{emptyCartMessage && (
				<div className='order-confirmation error'>
					<FaTimesCircle className='error-icon' />
					<p>Add item to cart!</p>
				</div>
			)}
		</div>
	)
}

export default Header
