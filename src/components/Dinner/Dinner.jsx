import { motion } from 'framer-motion'
import React from 'react'
import Pizza4 from './../../images//Pizza-Hut-4.jpg'
import Pizza2 from './../../images/Pizza-Hut-2.jpg'
import Pizza3 from './../../images/Pizza-Hut-3.jpg'
import imgFood4 from './../../images/food-list-4.jpg'
import './dinner.css'

class Dinner extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			formActive: false,
			counts: new Array(6).fill(0),
			orders: [],
			itemsProduct: [
				{
					id: 1,
					image: Pizza4,
					title: 'Pizza Hut',
					description: 'Although the Pizza Hut Menu Prices.',
					price: '$3',
					oldPrice: '$7',
				},
				{
					id: 2,
					image: Pizza2,
					title: 'Pizza Hut',
					description: 'Although the Pizza Hut Menu Prices.',
					price: '$3',
					oldPrice: '$7',
				},
				{
					id: 3,
					image: Pizza3,
					title: 'Pizza Hut',
					description: 'Although the Pizza Hut Menu Prices.',
					price: '$3',
					oldPrice: '$7',
				},
				{
					id: 4,
					image: imgFood4,
					title: 'Pizza Hut',
					description: 'Although the Pizza Hut Menu Prices.',
					price: '$3',
					oldPrice: '$7',
				},
			],
		}
	}

	openForm = () => {
		this.setState({ formActive: true })
	}

	closeModal = () => {
		this.setState({ formActive: false })
	}

	increment = index => {
		const newCounts = [...this.state.counts]
		newCounts[index] += 1
		this.setState({ counts: newCounts })
	}

	decrement = index => {
		if (this.state.counts[index] > 0) {
			const newCounts = [...this.state.counts]
			newCounts[index] -= 1
			this.setState({ counts: newCounts })
		}
	}

	addToOrder = (item, count) => {
		const orderItem = { ...item, count: count }
		this.setState(
			prevState => ({
				orders: [...prevState.orders, orderItem],
			}),
			() => {
				this.props.onAdd(orderItem)
			}
		)
	}

	render() {
		const { counts, itemsProduct } = this.state

		return (
			<motion.section
				initial='hidden'
				whileInView='visible'
				className='food-list-Dinner'
			>
				<div className='container-Dinner'>
					{itemsProduct.map((item, index) => (
						<div
							className='food-list__card food-list__card-Dinner'
							key={item.id}
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
										onClick={() => this.decrement(index)}
									>
										-
									</button>
									<span>{counts[index]}</span>
									<button
										className='counter__button'
										onClick={() => this.increment(index)}
									>
										+
									</button>
								</div>
								<button
									className='btn btn--small'
									onClick={() => this.addToOrder(item, counts[index])}
								>
									Add to Basket
								</button>
							</div>
						</div>
					))}
				</div>
			</motion.section>
		)
	}
}

export default Dinner
