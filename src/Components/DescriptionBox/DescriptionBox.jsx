import React from "react";
import "./Descriptionbox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates buying
          and selling of products or services over the internet serves as a
          virtual marketplace where business and individual showcase their
          products, interact with customers, and conduct transactions without
          the need for a physical presence. E-commerce websites have gained
          immense popularity due to their convenience accessibility, and the
          global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services a detailed
          descriptions, images, prices, and any available varaties (e.g., sizes,
          colors). Each product usally has its own dedicated page with relevant
          information
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
