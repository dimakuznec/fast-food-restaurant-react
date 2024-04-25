import Feedback from './../../images/feedback.png'
import './testimonial.css'

const Testimonial = () => {
	return (
		<div className='feedback'>
			<div className='container'>
				<img src={Feedback} alt='' className='feedback__img' />

				<blockquote className='feedback__text'>
					<p className='feedback__desc'>
						Thanks a lot for the prompt service. Really appreciate. Excellence
						taste in Every Bite.Add a joy of best Taste. Foodie Moments.
					</p>
					<cite className='feedback__author'>Adele A. McNeill</cite>
					<span className='feedback__subauthor'>AMIRICAN</span>
				</blockquote>
			</div>
		</div>
	)
}

export default Testimonial
