import './Product';

const Product  = () => {
    return (
        <section initial="hidden" whileInView="visible" className="product">
            <div className="container">
                <div className="product__card card-queen">
                <h4 className="product__title">Dairy Queen</h4>
                <p className="product__desc">Dairy Queen is one of the biggest fast-food.</p>
                <span className="product__price">$4</span>
                <span className="product__price product__price--old">$6</span>
                <a href="#!" className="btn btn--small">Order now</a>
                </div>
                <div className="product__card card-hut">
                <h4 className="product__title">Pizza Hut</h4>
                <p className="product__desc">Although the Pizza Hut Menu Prices.</p>
                <span className="product__price">$3</span>
                <span className="product__price product__price--old">$7</span>
                <a href="#!" className="btn btn--small">Order now</a>
                </div>
                <div className="product__card card-king">
                <h4 className="product__title">Burger King</h4>
                <p className="product__desc">Together with McDonald’s, Burger King.</p>
                <span className="product__price">$4</span>
                <span className="product__price product__price--old">$6</span>
                <a href="#!" className="btn btn--small">Order now</a>
                </div>
                <div className="product__card card-papa">
                <h4 className="product__title">Papa John’s</h4>
                <p className="product__desc">Papa John’s is one of the most popular fast-food.</p>
                <span className="product__price">$4</span>
                <span className="product__price product__price--old">$6</span>
                <a href="#!" className="btn btn--small">Order now</a>
                </div>
            </div>
        </section>
    );
}
 
export default Product;
