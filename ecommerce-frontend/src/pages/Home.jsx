import products from "../data/products";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Elevate Your Everyday Style</h1>
          <p>Premium quality products designed for modern living.</p>
          <button className="primary-btn">Shop Collection</button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section">
        <h2>Featured Products</h2>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>
                <button className="secondary-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Experience Smart Shopping</h2>
        <p>Fast delivery • Secure checkout • Best quality</p>
        <button className="primary-btn">Start Shopping</button>
      </section>

    </div>
  );
}

export default Home;