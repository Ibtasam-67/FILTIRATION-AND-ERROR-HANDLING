import React from "react";
import Header from "../componenents/header/Header";
import ProductDetails from "../componenents/productDetails/ProductDetails";
import SideNav from "../componenents/sideNav/SideNav";

const Screen = () => {
  return (
    <div>
      <Header />
      <SideNav />
      <Products />
      <ProductDetails />
    </div>
  );
};

export default Screen;
