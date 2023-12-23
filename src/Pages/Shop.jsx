import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div>
      {/*  Below importing the hero component */}
      <Hero />

      {/* Below we are importing popular component where it includes all the womens category items */}
      <Popular />

      {/* Below we have imported the Offers component  */}
      <Offers />
      {/* Below we have imported New Collection component */}
      <NewCollections />
      {/* Below we have imported New Letter component */}
      <NewsLetter />
    </div>
  );
};

export default Shop;
