import './sectionOrder.css';
import burger from './../../images/burger.png';
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

const SectionOrder = () => {
    return (
        <motion.section className="order" initial="hidden" whileInView="visible">
            <div className="container">
                <motion.img custom={1} variants={textAnimation} src={burger} alt="" className="order__img"/>

                <div className="order__text">
                <h3 className="order__title">Burger King</h3>
                <p className="order__desc">Together with McDonald’s, 
                  Burger King has grown to become synonymous with burgers in the US.
                </p>
                <span className="order__price">$6</span>
                <span className="order__price order__price--old">$8</span>
                <a href="#!" className="btn">Order now</a>
                </div>
            </div>
        </motion.section>
    );
}
 
export default SectionOrder;

