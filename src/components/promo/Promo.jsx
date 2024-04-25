import { motion } from 'framer-motion'
import React, { useState } from 'react'

import './promo.css'

const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: custom => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const Promo = () => {
	const [formActive, setFormActive] = useState(false)

	const openForm = () => {
		setFormActive(true)
	}

	const closeModal = () => {
		setFormActive(false)
	}

	return (
		<>
			<motion.main initial='hidden' whileInView='visible' className='main'>
				<section className='welcome'>
					<div className='container'>
						<div className='welcome__text'>
							<motion.h4
								custom={1}
								variants={textAnimation}
								className='welcome__subtitle'
							>
								FAST FOOD BURGERS
							</motion.h4>
							<motion.h1
								custom={2}
								variants={textAnimation}
								className='welcome__title'
							>
								The fastest food, for instant hunger.
							</motion.h1>
							<motion.p
								custom={3}
								variants={textAnimation}
								className='welcome__desc'
							>
								Some food has looked so awful that it's looked like something
								that the dog's brought home, yet after one mouthful I've been
								left eating my thoughts, my words & my food and gone back for
								seconds.
							</motion.p>
							<motion.button
								custom={4}
								variants={textAnimation}
								className='btn'
								onClick={openForm}
							>
								Order now
							</motion.button>
						</div>
						{formActive && (
							<dialog
								className='mobile-overlay__product visible-mobile__product  mobile__product'
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
									Order{' '}
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
												<span class='buy-now-form-class-span__product'>
													+380
												</span>
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
				</section>
			</motion.main>
		</>
	)
}

export default Promo
