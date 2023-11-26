import React from "react";
import "./Products.styles.scss"; // Assuming your SASS file is named ProductSection.scss
import { useNavigate } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import Button from "../Button";

export const ProductCard = ({ product, endPoint }) => {
  const navigate = useNavigate();

  function onClikckOnBuy() {
    navigate(endPoint);
  }
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <Button onClick={onClikckOnBuy} label="Buy Now">
        Buy Now
      </Button>
    </div>
  );
};

const ProductSection = () => {
  const { products } = useProduct();
  return (
    <section className="product-section">
      {products.map((product) => (
        <ProductCard
          endPoint={`/products/${product.id}`}
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
};

export default ProductSection;
