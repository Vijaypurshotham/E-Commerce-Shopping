import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newletter and get exclusive discount</p>
      <div>
        <input type="email" placeholder="Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
