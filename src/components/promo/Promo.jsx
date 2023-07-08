import './promo.css';
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

const Promo = () => {
    return (
    <motion.main  initial="hidden" whileInView="visible" className="main">
        <section className="welcome">
            <div className="container">
                <div className="welcome__text">
                    <motion.h4 custom={1} 
                    variants={textAnimation} className="welcome__subtitle">FAST FOOD BURGERS
                    </motion.h4>
                    <motion.h1 custom={2} 
                    variants={textAnimation} className="welcome__title">The fastest food, for instant hunger.
                    </motion.h1>
                    <motion.p custom={3} 
                    variants={textAnimation} className="welcome__desc">Some food has looked so awful that it's looked like something that the dog's brought home, 
                    yet after one mouthful I've been left eating my thoughts, my words & my food and gone back for seconds.
                    </motion.p>
                    <motion.a custom={4} variants={textAnimation} href="#!" className="btn">Order now</motion.a>
                </div>
            </div>
        </section> 
  </motion.main>
  );
}
 
export default Promo;