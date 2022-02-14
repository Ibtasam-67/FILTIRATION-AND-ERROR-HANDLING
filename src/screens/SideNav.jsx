import React from "react";

const SideNav = () => {
  return (
    <div>
      <SideNav
        filterByCategory={filterByCategory}
        getAllProducts={getAllProducts}
        products={products}
        setFilterResult={setFilterResult}
        setError={setError}
        minMaxSubmit={minMaxSubmit}
        products={products}
      />
    </div>
  );
};

export default SideNav;
