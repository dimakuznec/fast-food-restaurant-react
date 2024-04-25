import { NavLink } from 'react-router-dom'
import logoImg from './../../images/icons/logo.png'
import facebook from './../../images/icons/socials/facebook.png'
import instagram from './../../images/icons/socials/instagram.png'
import linkedin from './../../images/icons/socials/linkedin.png'
import twitter from './../../images/icons/socials/twitter.png'
import './footer.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__contacts'>
					<img src={logoImg} alt='Логотип' className='footer__logo' />
					<a
						className='footer__link footer__link-mail'
						href='mailto:fastfood_usa@gmail.com'
					>
						fastfood_usa@gmail.com
					</a>
					<a href='#!' className='footer__link footer__link-web'>
						www.fastfood_usa.com
					</a>
				</div>
				<nav className='footer__nav'>
					<ul className='footer__list'>
						<li className='footer__list-title footer__menu'>
							<p className='footer__title'>Our menu</p>
							<ul className='footer__inner-list'>
								<li className='footer__list-item'>
									<NavLink to='Breakfast'>Breakfast</NavLink>
								</li>
								<li className='footer__list-item'>
									<NavLink to='Lunce'>Lunce</NavLink>
								</li>
								<li className='footer__list-item'>
									<NavLink to='Dinner'>Dinner</NavLink>
								</li>
							</ul>
						</li>
						<li className='footer__list-title footer__info'>
							<p className='footer__title'>Information</p>
							<ul className='footer__inner-list'>
								<li className='footer__list-item'>
									<NavLink to='/AboutUs'>About us</NavLink>
								</li>
								<li className='footer__list-item'>
									<NavLink to='Testimonial'>Testimonial</NavLink>
								</li>
								<li className='footer__list-item'>
									<NavLink to='Event'>Event</NavLink>
								</li>
							</ul>
						</li>
						<li className='footer__list-title footer__links'>
							<p className='footer__title'>Useful Links</p>
							<ul className='footer__inner-list'>
								<li className='footer__list-item'>
									<NavLink to='Services'>Services</NavLink>
								</li>
								<li className='footer__list-item'>
									<NavLink to='Support'>Support</NavLink>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<div className='footer__socials'>
					<p className='footer__title'>Social Handles</p>
					<div className='footer__socials-icons'>
						<a className='footer__socials-link' href='#!'>
							<img src={facebook} alt='' />
						</a>
						<a className='footer__socials-link' href='#!'>
							<img src={twitter} alt='' />
						</a>
						<a className='footer__socials-link' href='#!'>
							<img src={instagram} alt='' />
						</a>
						<a className='footer__socials-link' href='#!'>
							<img src={linkedin} alt='' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
