import { motion } from 'framer-motion'
import React from 'react'
import PapaJohns1 from './../../images/Papa-John’s1.jpg'
import PapaJohns2 from './../../images/Papa-John’s2.jpg'
import PapaJohns3 from './../../images/Papa-John’s3.jpg'
import PapaJohns4 from './../../images/Papa-John’s4.jpg'
import PapaJohns5 from './../../images/Papa-John’s5.jpg'
import PapaJohns6 from './../../images/Papa-John’s6.jpg'

import './papaJohn’s.css'

class PapaJohns extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			formActive: false,
			counts: new Array(6).fill(0),
			orders: [],
			itemsProduct: [
				{
					image: PapaJohns1,
					title: 'Papa John’s',
					description: 'Papa John’s is one of the most popular fast-food.',
					price: '$4',
					oldPrice: '$6',
				},
				{
					image: PapaJohns2,
					title: 'Papa John’s',
					description: 'Papa John’s is one of the most popular fast-food.',
					price: '$4',
					oldPrice: '$6',
				},
				{
					image: PapaJohns3,
					title: 'Papa John’s',
					description: 'Papa John’s is one of the most popular fast-food.',
					price: '$4',
					oldPrice: '$6',
				},
				{
					image: PapaJohns4,
					title: 'Papa John’s',
					description: 'Papa John’s is one of the most popular fast-food.',
					price: '$4',
					oldPrice: '$6',
				},
				{
					image: PapaJohns5,
					title: 'Papa John’s',
					description: 'Papa John’s is one of the most popular fast-food.',
					price: '$4',
					oldPrice: '$6',
				},
				{
					image: PapaJohns6,
					title: 'Papa John’s',
					description: 'Papa John’s is one of the most popular fast-food.',
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
