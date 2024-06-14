import { motion } from 'framer-motion'
import React, { Component } from 'react'
import DinnerImage1 from './../../images/Pizza-Hut-1.jpg'
import DinnerImage2 from './../../images/Pizza-Hut-2.jpg'
import DinnerImage3 from './../../images/Pizza-Hut-3.jpg'
import DinnerImage4 from './../../images/Pizza-Hut-4.jpg'
import './dinner.css'

class Dinner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formActive: false,
			counts: new Array(6).fill(0),
			orders: [],
			itemsProduct: [
				{
					id: 7,
					image: DinnerImage1,
					title: 'Steak Dinner',
					description: 'Juicy steak with mashed potatoes.',
					price: '$15',
					oldPrice: '$20',
					category: 'dinner',
				},
				{
					id: 8,
					image: DinnerImage2,
					title: 'Pasta Dinner',
					description: 'Creamy Alfredo pasta.',
					price: '$12',
					oldPrice: '$16',
					category: 'dinner',
				},
				{
					id: 9,
					image: DinnerImage3,
					title: 'Seafood Dinner',
					description: 'Grilled salmon with veggies.',
					price: '$18',
					oldPrice: '$22',
					category: 'dinner',
				},
				{
					id: 10,
					image: DinnerImage4,
					title: 'Chicken Dinner',
					description: 'Grilled chicken with salad.',
					price: '$14',
					oldPrice: '$18',
					category: 'dinner',
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
		if (count === 0) return

		const orderItem = { ...item, count: count }
		this.setState(
			prevState => {
				const existingItemIndex = prevState.orders.findIndex(
					orderItem =>
						orderItem.id === item.id && orderItem.category === item.category
				)

				if (existingItemIndex >= 0) {
					const updatedOrders = [...prevState.orders]
					updatedOrders[existingItemIndex].count += count
					return { orders: updatedOrders }
				} else {
					return { orders: [...prevState.orders, orderItem] }
				}
			},
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
