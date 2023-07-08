import './SectionFoodList.css';
import imgFood1 from './../../images/food-list-1.jpg';
import imgFood2 from './../../images/food-list-2.jpg';
import imgFood3 from './../../images/food-list-3.jpg';
import imgFood4 from './../../images/food-list-4.jpg';
import {motion} from 'framer-motion';

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }, 
    }),
}

const SectionFoodList = () => {
    return (
        <motion.section  initial="hidden" whileInView="visible" className="food-list">
            <div className="container">
                <div className="food-list__card">
                <img src={imgFood1} alt="" className="food-list__img"/>
                <div className="food-list__text-wrapper">
                    <h4 className="food-list__title">Chicken Paella</h4>
                    <p className="food-list__desc">We just don't make and sell food. Good food warms.</p>
                </div>
                </div>
                <div className="food-list__card">
                <img src={imgFood2} alt="" className="food-list__img"/>
                <div className="food-list__text-wrapper">
                    <h4 className="food-list__title">Taco Del Mar</h4>
                    <p className="food-list__desc">Taco Del Mar brings the best out of Mexican cuisine with fresh.</p>
                </div>
                </div>
                <div className="food-list__card">
                <img src={imgFood3} alt="" className="food-list__img"/>
                <div className="food-list__text-wrapper">
                    <h4 className="food-list__title">Bon Au Pain</h4>
                    <p className="food-list__desc">Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                </div>
                </div>
                <div className="food-list__card">
                <img src={imgFood4} alt="" className="food-list__img"/>
                <div className="food-list__text-wrapper">
                    <h4 className="food-list__title">Pizza Hut.</h4>
                    <p className="food-list__desc">Although the Pizza Hut Menu Prices have tumbled over the years.</p>
                </div>
                </div>
            </div>
        </motion.section>
    );
}
 
export default SectionFoodList;