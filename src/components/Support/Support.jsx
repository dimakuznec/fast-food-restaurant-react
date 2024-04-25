import { NavLink } from 'react-router-dom'
import './support.css'

const Support = () => {
	return (
		<>
			<nav className='Support__nav'>
				<ul className='Support__list'>
					<li className='Support__list-title Support__info'>
						<p className='Support__title'>Information</p>
						<ul className='Support__inner-list'>
							<li className='Support__list-item'>
								<p>+7 958-676-99</p>
							</li>
							<li className='Support__list-item'>
								<NavLink to='mailto:fastfood_usa@gmail.com'>
									fastfood_usa@gmail.com
								</NavLink>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Support
