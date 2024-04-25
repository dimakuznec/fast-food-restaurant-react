import { motion } from 'framer-motion'
import React, { useState } from 'react'
import imgFood10 from './../../images/food-list-10.jpg'
import imgFood11 from './../../images/food-list-11.jpg'
import imgFood3 from './../../images/food-list-3.jpg'
import imgFood5 from './../../images/food-list-5.jpg'
import imgFood6 from './../../images/food-list-6.jpg'
import imgFood7 from './../../images/food-list-7.jpg'
import imgFood8 from './../../images/food-list-8.jpg'
import imgFood9 from './../../images/food-list-9.jpg'
import './breakfast.css'

const Breakfast = () => {
	const [formActive, setFormActive] = useState(false)

	const products = [
		{
			image: imgFood3,
			title: 'Burger King',
			description: 'Together with McDonald’s, Burger King.',
			price: '$4',
			oldPrice: '$6',
		},
		{
			image: imgFood5,
			title: 'Burger King',
			description: 'Together with McDonald’s, Burger King.',
			price: '$4',
			oldPrice: '$6',
		},
		{
			image: imgFood6,
			title: 'Burger King',
			description: 'Together with McDonald’s, Burger King.',
			price: '$4',
			oldPrice: '$6',
		},
		{
			image: imgFood7,
			title: 'Burger King',
			description: 'Together with McDonald’s, Burger King.',
			price: '$4',
			oldPrice: '$6',
		},
		{
			image: imgFood8,
			title: 'Burger King',
			description: 'Together with McDonald’s, Burger King.',
			price: '$4',
			oldPrice: '$6',
		},
		{
			image: imgFood9,
			title: 'Burger King',
			description: 'Together with McDonald’s, Burger King.',
			price: '$4',
			oldPrice: '$6',
		},
		{
			image: imgFood10,
			title: 'Burger King',
			description: 'Together with McDonald’s, Burger King.',
			price: '$4',
			oldPrice: '$6',
		},
		{
			image: imgFood11,
			title: 'Burger King',
			description: 'Together with McDonald’s, Burger King.',
			price: '$4',
			oldPrice: '$6',
		},
		// Добавьте другие продукты по аналогии
	]

	// Define count state for each product
	const [counts, setCounts] = useState(new Array(products.length).fill(0))

	const openForm = () => {
		setFormActive(true)
	}

	const closeModal = () => {
		setFormActive(false)
	}

	// Define separate increment and decrement functions for each product
	const increment = index => {
		const newCounts = [...counts]
		newCounts[index] += 1
		setCounts(newCounts)
	}

	const decrement = index => {
		if (counts[index] > 0) {
			const newCounts = [...counts]
			newCounts[index] -= 1
			setCounts(newCounts)
		}
	}

	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			className='food-list-Breakfast'
		>
			<div className='container-Breakfast'>
				{products.map((item, index) => (
					<div
						className='food-list__card food-list__card-Breakfast'
						key={index}
					>
						<img src={item.image} alt='' className='food-list__img' />
						<div className='food-list__text-wrapper'>
							<h4 className='food-list__title'>{item.title}</h4>
							<p className='food-list__desc'>{item.description}</p>
							<span className='product__price'>{item.price}</span>
							<span className='product__price product__price--old'>
								{item.oldPrice}
							</span>
							<div className='counter'>
								<button
									className='counter__button'
									onClick={() => decrement(index)}
								>
									-
								</button>
								<span>{counts[index]}</span>
								<button
									className='counter__button'
									onClick={() => increment(index)}
								>
									+
								</button>
							</div>
							<button className='btn btn--small' onClick={openForm}>
								Order now
							</button>
						</div>
					</div>
				))}

				{/* Dialog/Form */}
				{formActive && (
					<dialog
						className='mobile-overlay__product visible-mobile__product'
						open
					>
						<button
							type='button'
							className='buy-now-modal-class-button__product js-modal-close__product'
							onClick={closeModal}
						>
							<div className='black-svg' width='14' height='14'>
								<samp>&#10006;</samp>
							</div>
						</button>
						<h1 className='buy-now-form-modal-window-header__product'>
							Order
							<span className='buy-now-form-modal-window-header-span__product'>
								now
							</span>
						</h1>

						<form className='buy-now-modal-contact-form__product'>
							<div className='buy-now-form-personal-information__product'>
								<label
									className='buy-now-per-info__product'
									htmlFor='user-first-name'
								>
									Personal Information
								</label>
								<div className='buy-now-per-info-name-div__product'>
									<input
										className='buy-now-per-info-name-name__product'
										id='user-first-name'
										type='text'
										name='user-first-name'
										required
										pattern="[a-zA-Zа-яА-ЯїЇіІєЄ']+"
										placeholder='Name'
									/>
									<input
										className='buy-now-per-info-name-name__product'
										id='user-last-name'
										type='text'
										name='user-last-name'
										required
										pattern="[a-zA-Zа-яА-ЯїЇіІєЄ']+"
										placeholder='Surname'
									/>
								</div>
							</div>

							<div class='buy-now-form-personal-information__product'>
								<label class='buy-now-per-info__product' for='user-email'>
									Email
								</label>
								<div class='buy-now-contact-form-input-wraper__product'>
									<input
										class='buy-now-per-info-name-name__product'
										type='email'
										name='user-email'
										required
										id='user-email'
										pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
										placeholder='Email'
									/>
								</div>
							</div>

							<div class='buy-now-form-personal-information__product'>
								<label class='buy-now-per-info__product' for='user-tel'>
									Phone number
								</label>
								<div class='buy-now-contact-form-input-wraper__product'>
									<span class='buy-now-div-for-icon__product'>
										<span class='buy-now-form-class-span__product'>+380</span>
									</span>
									<input
										class='buy-now-per-info-name-tel__product'
										type='tel'
										id='user-tel'
										name='user_tel'
										required
										pattern='[0-9]{3}-[0-9]{2}-[0-9]{2}'
										title='xxx-xx-xx'
										placeholder='Phone number'
									/>
								</div>
							</div>

							<div class='buy-now-form-personal-information__product'>
								<label
									class='buy-now-per-info'
									for='user-bank-account__product'
								>
									Card number
								</label>
								<div class='buy-now-contact-form-input-wraper__product'>
									<input
										class='buy-now-per-info-name-name__product'
										type='text'
										id='user-bank-account'
										name='user_bank_account'
										required
										pattern='[0-9]{16}'
										title='Enter card'
										placeholder='Enter card'
									/>
									<div
										aria-label='bank-icon'
										width='32'
										height='21'
										class='buy-now-icon-bank__product'
									>
										<img src='../imgs/section.png' alt='' />
									</div>
								</div>
							</div>

							<div class='buy-now-form-comment__product'>
								<label class='buy-now-per-info__product' for='user-comment'>
									Comment
								</label>
								<textarea
									class='buy-now-contact-from-message__product'
									name='user-comment'
									id='user-comment'
									placeholder='Enter text'
								></textarea>
							</div>

							{/* Add other form fields here */}
							<button
								type='submit'
								className='buy-now-form-btn-submit__product'
							>
								<span className='buy-now-form-btn-submit-span__product'>
									Submit
								</span>
							</button>
						</form>
					</dialog>
				)}
			</div>
		</motion.section>
	)
}

export default Breakfast
