import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        {/* Below if we click on the particular product image then it scrolls and 0,0 indicates x and y axis coordinate */}

        <img
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt="product images"
        />
      </Link>

      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
