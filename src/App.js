import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Home'
import OurOffer from './OurOffer'
import Pages from './Pages'
import Pricing from './Pricing'
import Shop from './Shop'
import AboutUs from './components/AboutUs/AboutUs'
import Breakfast from './components/Breakfast/Breakfast'
import Dinner from './components/Dinner/Dinner'
import Event from './components/Event/Event'
import Lunce from './components/Lunce/Lunce'
import PapaJohns from './components/PapaJohns/PapaJohns'
import Services from './components/Services/Services'
import Support from './components/Support/Support'
import Testimonial from './components/Testimonial/Testimonial'
import Download from './components/download/Download'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

class App extends Component {
	state = {
		orders: [],
	}

	addToOrder = item => {
		this.setState(prevState => {
			const existingItem = prevState.orders.find(order => order.id === item.id)
			if (existingItem) {
				return {
					orders: prevState.orders.map(order =>
						order.id === item.id
							? { ...order, count: order.count + item.count }
							: order
					),
				}
			} else {
				return {
					orders: [...prevState.orders, { ...item, count: item.count }],
				}
			}
		})
	}

	removeFromOrder = item => {
		this.setState(prevState => {
			const existingItem = prevState.orders.find(order => order.id === item.id)
			if (existingItem.count > 1) {
				return {
					orders: prevState.orders.map(order =>
						order.id === item.id ? { ...order, count: order.count - 1 } : order
					),
				}
			} else {
				return {
					orders: prevState.orders.filter(order => order.id !== item.id),
				}
			}
		})
	}

	clearOrders = () => {
		this.setState({ orders: [] })
	}

	render() {
		return (
			<div className='App'>
				<Router>
					<Header
						orders={this.state.orders}
						onRemove={this.removeFromOrder}
						onClear={this.clearOrders}
					/>

					<Routes>
						<Route path='/Home' element={<Home />} />
						<Route path='/OurOffer' element={<OurOffer />} />
						<Route path='/Pages' element={<Pages />} />
						<Route path='/Pricing' element={<Pricing />} />
						<Route path='/Shop' element={<Shop />} />
						<Route
							path='/Breakfast'
							element={<Breakfast onAdd={this.addToOrder} />}
						/>
						<Route path='/Lunce' element={<Lunce onAdd={this.addToOrder} />} />
						<Route
							path='/Dinner'
							element={<Dinner onAdd={this.addToOrder} />}
						/>
						<Route path='/Testimonial' element={<Testimonial />} />
						<Route path='/AboutUs' element={<AboutUs />} />
						<Route path='/Event' element={<Event />} />
						<Route path='/Services' element={<Services />} />
						<Route path='/Support' element={<Support />} />
						<Route
							path='/PapaJohns'
							element={<PapaJohns onAdd={this.addToOrder} />}
						/>
					</Routes>
					<Download />
					<Footer />
				</Router>
			</div>
		)
	}
}

export default App
