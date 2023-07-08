import './footer.css';
import logoImg from './../../images/icons/logo.png';
import facebook from './../../images/icons/socials/facebook.png';
import twitter from './../../images/icons/socials/twitter.png';
import instagram from './../../images/icons/socials/instagram.png';
import linkedin from './../../images/icons/socials/linkedin.png';

const Footer = () => {
    return (
    <footer className="footer">
        <div className="container">
            <div className="footer__contacts">
            <img src={logoImg} alt="Логотип" className="footer__logo"/>
            <a className="footer__link footer__link-mail" href="mailto:fastfood_usa@gmail.com">fastfood_usa@gmail.com</a>
            <a href="#!" className="footer__link footer__link-web">www.fastfood_usa.com</a>
            </div>
            <nav className="footer__nav">
            <ul className="footer__list">
                <li className="footer__list-title footer__menu">
                <a className="footer__title" href="#!">Our menu</a>
                <ul className="footer__inner-list">
                    <li className="footer__list-item"><a href="#!">Breakfast</a></li>
                    <li className="footer__list-item"><a href="#!">Lunce</a></li>
                    <li className="footer__list-item"><a href="#!">Dinner</a></li>
                </ul>
                </li>
                <li className="footer__list-title footer__info">
                <a className="footer__title" href="#!">Information</a>
                <ul className="footer__inner-list">
                    <li className="footer__list-item"><a href="#!">About us</a></li>
                    <li className="footer__list-item"><a href="#!">Testimonial</a></li>
                    <li className="footer__list-item"><a href="#!">Event</a></li>
                </ul>
                </li>
                <li className="footer__list-title footer__links">
                <a className="footer__title" href="#!">Useful Links</a>
                <ul className="footer__inner-list">
                    <li className="footer__list-item"><a href="#!">Services</a></li>
                    <li className="footer__list-item"><a href="#!">Support</a></li>
                    <li className="footer__list-item"><a href="#!">Conditions</a></li>
                </ul>
                </li>
            </ul>
            </nav>
            <div className="footer__socials">
            <p className="footer__title">Social Handles</p>
            <div className="footer__socials-icons">
                <a className="footer__socials-link" href="#!"><img src={facebook} alt=""/></a>
                <a className="footer__socials-link" href="#!"><img src={twitter} alt=""/></a>
                <a className="footer__socials-link" href="#!"><img src={instagram} alt=""/></a>
                <a className="footer__socials-link" href="#!"><img src={linkedin} alt=""/></a>
            </div>
            </div>
        </div>
    </footer> 
    );
}
 
export default Footer;