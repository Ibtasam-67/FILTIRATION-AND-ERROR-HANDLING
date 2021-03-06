import React, { useState } from "react";
import "./SideNav.css";

const SideNav = ({ filterByCategory, getAllProducts, minMaxSubmit }) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const handleInputMin = (e) => {
    // console.log(e.target.value, "========>min");
    setMin(Number(e.target.value));
  };
  const handleInputMax = (e) => {
    // console.log(typeof e.target.value, "======>max");
    setMax(Number(e.target.value));
  };

  return (
    <div>
      <div class="sidebar side">
        <a href="#products" onClick={getAllProducts}>
          Products
        </a>
        <a href="#men" onClick={() => filterByCategory("men's clothing")}>
          Men
        </a>
        <a href="#women" onClick={() => filterByCategory("women's clothing")}>
          Women
        </a>
        <a href="#jewlery" onClick={() => filterByCategory("jewelery")}>
          Jewelery
        </a>
        <a href="#electronics" onClick={() => filterByCategory("electronics")}>
          Electronics
        </a>
        <form className="pricing" onSubmit={(e) => minMaxSubmit(e, min, max)}>
          <input
            type="number"
            placeholder="0"
            className="min"
            value={min}
            name="min"
            onChange={handleInputMin}
          ></input>
          <input
            type="number"
            placeholder="0"
            className="min"
            value={max}
            name="max"
            onChange={handleInputMax}
          ></input>
          {min < max ? (
            <button className="btn_dis">Apply</button>
          ) : (
            <button className="btn_dis">Disable</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SideNav;
