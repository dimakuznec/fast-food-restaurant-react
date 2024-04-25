import SectionFoodList from './components/SectionFoodList/SectionFoodList'
import SectionOrder from './components/SectionOrder/SectionOrder'
import Feedback from './components/feedback/Feedback'
import Product from './components/product/Product'
import Promo from './components/promo/Promo'

const Home = () => {
	return (
		<>
			<Promo />
			<SectionFoodList />
			<SectionOrder />
			<Product />

			<Feedback />
		</>
	)
}

export default Home
