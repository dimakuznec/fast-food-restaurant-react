import './header.css';
import logoImg from './../../images/icons/logo.png';

const Header = () => {
    return (
        <header className="header">
        <div className="container">
            <img src={logoImg} alt="Логотип" className="header__logo"/>

            <nav className="header__nav">
            <ul className="header__list">
                <li><a className="active" href="Home">HOME</a></li>
                <li><a href="Pages">PAGES</a></li>
                <li><a href="OurOffer">OUR OFFER</a></li>
                <li><a href="Pricing">PRICING</a></li>
                <li><a href="Shop">SHOP</a></li>
            </ul>
            </nav>

            <a href="#!" className="btn">Order now</a>
        </div>
    </header>
    );
}
 
export default Header;