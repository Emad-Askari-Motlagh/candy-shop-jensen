import React, { useEffect, useState } from "react";
import "./Word.styles.scss";
import useProduct from "../../hooks/useProduct";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Label from "../../components/Label/index";
import ProductCard from "../../components/ProductCard";

export default function Product() {
  const [currentProduct, setCurrentproduct] = useState({});
  const { product } = useParams();
  const { getProductById, error, meaning, loading } = useProduct();

  useEffect(() => {
    console.log(product);
    async function fetchProduct() {
      const productObj = await getProductById(product);
      setCurrentproduct(productObj);
    }
    fetchProduct();
  }, [product]);

  return (
    <div className="word-page-wrapper">
      <Label color="orange">Product</Label>
      {currentProduct?.id ? <ProductCard product={currentProduct} /> : null}
      {loading && <Loading />}
      {error && <div>{error}</div>}
    </div>
  );
}
