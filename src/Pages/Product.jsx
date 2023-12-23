import React, { useContext } from "react";

import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      {/* Importing the breadcrum component as it consist the data of the products  */}

      <Breadcrum product={product} />

      {/* Importing the "product display" component where it consist of all the data when the user click on the product image */}
      <ProductDisplay product={product} />

      {/* Importing the descriptionbox component  */}
      <DescriptionBox />

      {/* Importing the relatedproduct component  */}
      <RelatedProduct />
    </div>
  );
};

export default Product;
