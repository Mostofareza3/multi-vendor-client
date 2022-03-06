/* eslint-disable prettier/prettier */
import React from "react";
import ProductCart from "../common/ProductCart";

const ProductsArray = ({ products }: { products: any[] }) => {
  return (
    <div>
      <div className="grid-cols-4">
        {products.map((item) => (
          <ProductCart product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsArray;
