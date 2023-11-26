import React from "react";
import "./ProductCard.scss";
import Button from "../Button";
import useProduct from "../../hooks/useProduct";

export default function ProductCard({ product }) {
  const { saveProduct } = useProduct();
  return (
    <div className="product_card">
      <div className="product_card__description">
        <img src={`/${product?.image}`} alt="i" />
        <div className="descriptio-parent">
          <h2>{product?.name}</h2>
          <p>{product?.description}</p>
          <div className="product_card__price">
            <span>{`Price: `}</span>
            <span> 200,00kr</span>
          </div>
          <div className="add-button">
            <Button
              label="Add To Basket"
              onClick={() => saveProduct(product)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
