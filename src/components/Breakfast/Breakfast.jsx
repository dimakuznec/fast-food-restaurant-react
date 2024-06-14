import { motion } from 'framer-motion'
import React from 'react'
import BurgerKing1 from './../../images/Burger-King1.jpg'
import BurgerKing2 from './../../images/Burger-King2.jpg'
import BurgerKing3 from './../../images/Burger-King3.jpg'
import BurgerKing4 from './../../images/Burger-King4.jpg'
import BurgerKing5 from './../../images/Burger-King5.jpg'
import BurgerKing6 from './../../images/Burger-King6.jpg'
import BurgerKing7 from './../../images/Burger-King7.jpg'
import BurgerKing8 from './../../images/Burger-King8.jpg'
import './breakfast.css'

class Breakfast extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			formActive: false,
			counts: new Array(8).fill(0),
			orders: [],
			itemsProduct: [
				{
					id: 11,
					image: BurgerKing1,
					title: 'Burger King',
					description: 'Together with McDonald’s, Burger King.',
					price: '$4',
					oldPrice: '$6',
				},
				{
					id: 12,
					image: BurgerKing2,
					title: 'Burger King',
					description: 'Together with McDonald’s, Burger King.',
					price: '$4',
					oldPrice: '$6',
				},
				{
					id: 13,
					image: BurgerKing3,
					title: 'Burger King',
					description: 'Together with McDonald’s, Burger King.',
					price: '$4',
					oldPrice: '$6',
				},
				{
					id: 14,
					image: BurgerKing4,
					title: 'Burger King',
					description: 'Together with McDonald’s, Burger King.',
					price: '$4',
					oldPrice: '$6',
				},
				{
					id: 15,
					image: BurgerKing5,
					title: 'Burger King',
					description: 'Together with McDonald’s, Burger King.',
					price: '$4',
					oldPrice: '$6',
				},
				{
					id: 16,
					image: BurgerKing6,
					title: 'Burger King',
					description: 'Together with McDonald’s, Burger King.',
					price: '$4',
					oldPrice: '$6',
				},
				{
					id: 17,
					image: BurgerKing7,
					title: 'Burger King',
					description: 'Together with McDonald’s, Burger King.',
					price: '$4',
					oldPrice: '$6',
				},
				{
					id: 18,
					image: BurgerKing8,
					title: 'Burger King',
					description: 'Together with McDonald’s, Burger King.',
					price: '$4',
					oldPrice: '$6',
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
					orderItem => orderItem.id === item.id
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
				className='food-list-Breakfast'
			>
				<div className='container-Breakfast'>
					{itemsProduct.map((item, index) => (
						<div
							className='food-list__card food-list__card-Breakfast'
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

export default Breakfast
