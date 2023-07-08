import './download.css';
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


const Download = () => {
    return (
        <motion.div initial="hidden" whileInView="visible" className="download">
            <div className="container">
                <motion.p custom={1} variants={textAnimation}className="download__title">Download Our Menu</motion.p>
                <motion.a custom={2} variants={textAnimation} href="./images/burger.png" className="btn" download>DOWNLOAD</motion.a>
            </div>
        </motion.div>
    );
}
 
export default Download;