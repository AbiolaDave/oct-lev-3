import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate();

  async function fetchProducts() {
    try {
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  function goToProduct(param) {
    navigate(`/products/${param}`);
  }

  return (
    <main className="products-page">
      <div className="container">
        <header className="products-header">
          <p className="products-eyebrow">THE EVERYDAY EDIT</p>
          <h1 className="display-5 fw-bold mb-2">Find your next favorite.</h1>
          <p className="text-secondary mb-4">
            Thoughtful picks for your home, style, and everything in between.
          </p>
          <button
            className="btn btn-dark products-load-button"
            onClick={fetchProducts}
          >
            Explore products <span aria-hidden="true">→</span>
          </button>
        </header>

        <section
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4"
          aria-label="Products"
        >
          {products.map((item, i) => (
            <div
              onClick={() => goToProduct(item.title)}
              className="col"
              key={i}
            >
              <article className="card product-card h-100 border-0">
                <img
                  src={item.images[0]}
                  className="card-img-top product-image"
                  alt={item.title}
                />
                <div className="card-body d-flex flex-column p-4">
                  <span className="small text-secondary text-capitalize mb-2">
                    {item.category}
                  </span>
                  <h2 className="h5 card-title fw-semibold">{item.title}</h2>
                  <p className="card-text small text-secondary product-description">
                    {item.description}
                  </p>
                  <h3>
                    <span className="product-original-price">
                      ${item.price}
                    </span>
                    $
                    {(
                      item.price -
                      (item.discountPercentage / 100) * item.price
                    ).toFixed(2)}
                  </h3>
                </div>
              </article>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Products;
