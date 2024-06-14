import { motion } from 'framer-motion'
import React, { Component } from 'react'
import PapaJohnsImage1 from './../../images/Papa-John’s1.jpg'
import PapaJohnsImage2 from './../../images/Papa-John’s2.jpg'
import PapaJohnsImage3 from './../../images/Papa-John’s3.jpg'
import PapaJohnsImage4 from './../../images/Papa-John’s4.jpg'
import PapaJohnsImage5 from './../../images/Papa-John’s5.jpg'
import PapaJohnsImage6 from './../../images/Papa-John’s6.jpg'
import './papaJohn’s.css'

class PapaJohns extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formActive: false,
			counts: new Array(6).fill(0),
			orders: [],
			itemsProduct: [
				{
					id: 19,
					image: PapaJohnsImage1,
					title: 'Pepperoni Pizza',
					description: 'Classic Pepperoni pizza.',
					price: '$12',
					oldPrice: '$15',
					category: 'papajohns',
				},
				{
					id: 20,
					image: PapaJohnsImage2,
					title: 'Veggie Pizza',
					description: 'Loaded with fresh veggies.',
					price: '$10',
					oldPrice: '$13',
					category: 'papajohns',
				},
				{
					id: 21,
					image: PapaJohnsImage3,
					title: 'Cheese Pizza',
					description: 'Cheesy and delicious.',
					price: '$11',
					oldPrice: '$14',
					category: 'papajohns',
				},
				{
					id: 22,
					image: PapaJohnsImage4,
					title: 'Hawaiian Pizza',
					description: 'Sweet and savory.',
					price: '$13',
					oldPrice: '$16',
					category: 'papajohns',
				},
				{
					id: 23,
					image: PapaJohnsImage5,
					title: 'BBQ Chicken Pizza',
					description: 'Tangy BBQ sauce with chicken.',
					price: '$14',
					oldPrice: '$17',
					category: 'papajohns',
				},
				{
					id: 24,
					image: PapaJohnsImage6,
					title: 'Supreme Pizza',
					description: 'Loaded with toppings.',
					price: '$15',
					oldPrice: '$18',
					category: 'papajohns',
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
				className='food-list-PapaJohns'
			>
				<div className='container-PapaJohns'>
					{itemsProduct.map((item, index) => (
						<div
							className='food-list__card food-list__card-PapaJohns'
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

export default PapaJohns
