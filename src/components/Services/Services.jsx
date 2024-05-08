import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Pizza4 from './../../images//Pizza-Hut-4.jpg'
import BurgerKing1 from './../../images/Burger-King1.jpg'
import BurgerKing2 from './../../images/Burger-King2.jpg'
import BurgerKing3 from './../../images/Burger-King3.jpg'
import BurgerKing4 from './../../images/Burger-King4.jpg'
import BurgerKing5 from './../../images/Burger-King5.jpg'
import BurgerKing6 from './../../images/Burger-King6.jpg'
import BurgerKing7 from './../../images/Burger-King7.jpg'
import BurgerKing8 from './../../images/Burger-King8.jpg'
import DairyQueenLunce1 from './../../images/Dairy-Queen1.jpg'
import DairyQueenLunce2 from './../../images/Dairy-Queen2.jpg'
import DairyQueenLunce3 from './../../images/Dairy-Queen3.jpg'
import DairyQueenLunce4 from './../../images/Dairy-Queen4.jpg'
import DairyQueenLunce5 from './../../images/Dairy-Queen5.jpg'
import DairyQueenLunce6 from './../../images/Dairy-Queen6.jpg'
import PapaJohns1 from './../../images/Papa-John’s1.jpg'
import PapaJohns2 from './../../images/Papa-John’s2.jpg'
import PapaJohns3 from './../../images/Papa-John’s3.jpg'
import PapaJohns4 from './../../images/Papa-John’s4.jpg'
import PapaJohns5 from './../../images/Papa-John’s5.jpg'
import PapaJohns6 from './../../images/Papa-John’s6.jpg'
import Pizza1 from './../../images/Pizza-Hut-1.jpg'
import Pizza2 from './../../images/Pizza-Hut-2.jpg'
import Pizza3 from './../../images/Pizza-Hut-3.jpg'
import './services.css'

const Services = () => {
	const [formActive, setFormActive] = useState(false)

	const openForm = () => {
		setFormActive(true)
	}

	const closeModal = () => {
		setFormActive(false)
	}

	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			className='food-list-Breakfast'
		>
			<div className='container-Breakfast'>
				<div className='food-list__card food-list__card-Breakfast'>
					<img src={BurgerKing1} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Breakfast'>
					<img src={BurgerKing2} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Breakfast'>
					<img src={BurgerKing3} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Breakfast'>
					<img src={BurgerKing4} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Breakfast'>
					<img src={BurgerKing5} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Breakfast'>
					<img src={BurgerKing6} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Breakfast'>
					<img src={BurgerKing7} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Breakfast'>
					<img src={BurgerKing8} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Lunce'>
					<img src={DairyQueenLunce1} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Lunce'>
					<img src={DairyQueenLunce2} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Lunce'>
					<img src={DairyQueenLunce3} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Lunce'>
					<img src={DairyQueenLunce4} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Lunce'>
					<img src={DairyQueenLunce5} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Lunce'>
					<img src={DairyQueenLunce6} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Dinner'>
					<img src={Pizza1} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$3</span>
						<span className='product__price product__price--old'>$7</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Dinner'>
					<img src={BurgerKing1} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$3</span>
						<span className='product__price product__price--old'>$7</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Dinner'>
					<img src={Pizza2} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$3</span>
						<span className='product__price product__price--old'>$7</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Dinner'>
					<img src={Pizza3} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$3</span>
						<span className='product__price product__price--old'>$7</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-Dinner'>
					<img src={Pizza4} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$3</span>
						<span className='product__price product__price--old'>$7</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-PapaJohns'>
					<img src={PapaJohns1} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-PapaJohns'>
					<img src={PapaJohns2} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-PapaJohns'>
					<img src={PapaJohns3} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-PapaJohns'>
					<img src={PapaJohns4} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-PapaJohns'>
					<img src={PapaJohns5} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

				<div className='food-list__card food-list__card-PapaJohns'>
					<img src={PapaJohns6} alt='' className='food-list__img' />
					<div className='food-list__text-wrapper'>
						<h4 className='food-list__title'>Bon Au Pain</h4>
						<p className='food-list__desc'>
							Bon Au Pain is a pioneer in the healthy fast food scene.
						</p>
						<span className='product__price'>$4</span>
						<span className='product__price product__price--old'>$6</span>
						<button className='btn btn--small' onClick={openForm}>
							Order now
						</button>
					</div>
				</div>

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

export default Services
