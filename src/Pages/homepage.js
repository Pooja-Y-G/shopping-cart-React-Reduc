import React from "react";
import ProductListing from "../features/product-listing";
import data from "../data/products.json";

export default function HomePage() {
  return (
    <div>
      <ProductListing products={data.products} />
    </div>
  );
}
