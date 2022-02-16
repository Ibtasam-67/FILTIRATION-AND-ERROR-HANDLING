import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./componenents/header/Header";
import SideNav from "./componenents/sideNav/SideNav";
import Products from "./componenents/products/Products";
import { Rings } from "react-loader-spinner";

const MainScreen = () => {
  const [products, setProducts] = useState([]);
  const [filterResult, setFilterResult] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // =========FETCH-PRODUCT-FROM-API========
  const getData = async () => {
    try {
      axios.get(`https://fakestoreapi.com/products`).then((res) => {
        console.table(res.data, "======");
        const products = res.data;
        setProducts(products);
        setFilterResult(products);
        setLoading(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // =================FILTER-RESULT-BY-CATEGORY=======

  const filterByCategory = (item) => {
    const result = products.filter((product) => {
      return product.category === item;
    });
    setError(false);
    setFilterResult(result);
    // console.log(result, "JJ");
  };
  // ======================GET-ALL-PRODUCTS==============

  const getAllProducts = () => {
    setFilterResult(products);
    setError(false);
  };

  // =========================ON-SEARCH-CHANGE===============

  const onChange = (searchValue) => {
    const result = products.filter((item) => {
      return item.category.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilterResult(result);
  };
  // =======================MIN-MAX-SUBMIT======================

  const minMaxSubmit = (e, min, max) => {
    e.preventDefault();
    const minMaxResult = products.filter((item) => {
      return item.price >= min && item.price <= max;
    });
    if (minMaxResult.length !== 0) {
      setFilterResult(minMaxResult);
      console.log(minMaxResult);
    } else {
      setError(true);
      // console.log("clicked again");
    }
  };

  return (
    <>
      {loading ? (
        <div class="row ">
          <Header onChange={onChange} />

          <div class="col-sm-2  mt-5">
            <SideNav
              filterByCategory={filterByCategory}
              getAllProducts={getAllProducts}
              products={products}
              setFilterResult={setFilterResult}
              setError={setError}
              minMaxSubmit={minMaxSubmit}
            />
          </div>
          <div class="col-sm-1"></div>
          <div class="col-sm-9 ">
            <Products products={filterResult} error={error} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center ">
          <Rings color="#00BFFF" height={400} width={1500} />
        </div>
      )}
      <signup />
    </>
  );
};

export default MainScreen;
