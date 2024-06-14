import { motion } from 'framer-motion'
import React, { Component } from 'react'
import DairyQueenLunce1 from './../../images/Dairy-Queen1.jpg'
import DairyQueenLunce2 from './../../images/Dairy-Queen2.jpg'
import DairyQueenLunce3 from './../../images/Dairy-Queen3.jpg'
import DairyQueenLunce4 from './../../images/Dairy-Queen4.jpg'
import DairyQueenLunce5 from './../../images/Dairy-Queen5.jpg'
import DairyQueenLunce6 from './../../images/Dairy-Queen6.jpg'
import './lunce.css'

class Lunce extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formActive: false,
			counts: new Array(6).fill(0),
			orders: [],
			itemsProduct: [
				{
					id: 1,
					image: DairyQueenLunce1,
					title: 'Dairy Queen',
					description: 'Dairy Queen is one of the biggest fast-food chains.',
					price: '$4',
					oldPrice: '$6',
					category: 'lunce',
				},
				{
					id: 2,
					image: DairyQueenLunce2,
					title: 'Dairy Queen',
					description: 'Enjoy our delicious ice cream.',
					price: '$3',
					oldPrice: '$5',
					category: 'lunce',
				},
				{
					id: 3,
					image: DairyQueenLunce3,
					title: 'Dairy Queen',
					description: 'A classic favorite for all ages.',
					price: '$5',
					oldPrice: '$7',
					category: 'lunce',
				},
				{
					id: 4,
					image: DairyQueenLunce4,
					title: 'Dairy Queen',
					description: 'Try our new range of burgers.',
					price: '$6',
					oldPrice: '$8',
					category: 'lunce',
				},
				{
					id: 5,
					image: DairyQueenLunce5,
					title: 'Dairy Queen',
					description: 'Fresh and tasty salads.',
					price: '$4',
					oldPrice: '$6',
					category: 'lunce',
				},
				{
					id: 6,
					image: DairyQueenLunce6,
					title: 'Dairy Queen',
					description: 'Satisfy your sweet tooth with our desserts.',
					price: '$2',
					oldPrice: '$4',
					category: 'lunce',
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
				className='food-list-Lunce'
			>
				<div className='container-Lunce'>
					{itemsProduct.map((item, index) => (
						<div
							className='food-list__card food-list__card-Lunce'
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

export default Lunce
