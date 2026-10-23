import React from "react";
import { useParams

 } from "react-router-dom";
const Product = () => {
    const {id} = useParams()
  return (
    <div>
      <h1>Single Product</h1>
      <h1 className="text-info">{id}</h1>
    </div>
  );
};

export default Product;
