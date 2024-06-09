import React, { Component } from 'react'

export class Order extends Component {
	render() {
		const { item, onRemove, onAdd } = this.props

		return (
			<div className='item'>
				<img src={item.image} alt='' className='food-list__img' />
				<div className='food-list__text-wrapper'>
					<h4 className='food-list__title'>{item.title}</h4>
					<p className='food-list__desc'>{item.description}</p>
					<span className='product__price'>{item.price}</span>
					<span className='productprice productprice--old'>
						{item.oldPrice}
					</span>
					<span className='product__count'>Count: {item.count}</span>
					<div className='counter'>
						<button className='counter__button' onClick={() => onRemove(item)}>
							-
						</button>
						<span>{item.count}</span>
						<button className='counter__button' onClick={() => onAdd(item)}>
							+
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Order
