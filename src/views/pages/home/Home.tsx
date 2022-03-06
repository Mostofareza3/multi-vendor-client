/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import ProductService from "services/Product.service";
import DSlider from "views/components/custom/DSlider";
import ProductsArray from "views/components/home/ProductsArray";

const Home = () => {
  const [products, setProducts] = useState<[] | any>([]);

  useEffect(() => {
    ProductService.getAllProduct()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main>
      <div className="py-20">
        <DSlider />
      </div>
      <div>
        <ProductsArray products={products} />
      </div>
    </main>
  );
};

export default Home;
