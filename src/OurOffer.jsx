import SectionFoodList from './components/SectionFoodList/SectionFoodList'
import SectionOrder from './components/SectionOrder/SectionOrder'
import Product from './components/product/Product'

const OurOffer = () => {
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>OUR OFFER</h1>
			<SectionFoodList />
			<SectionOrder />
			<Product />
		</>
	)
}

export default OurOffer
