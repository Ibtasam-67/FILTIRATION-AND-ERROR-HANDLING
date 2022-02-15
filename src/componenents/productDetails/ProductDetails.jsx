import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = ({}) => {
  const [singleproduct, setSingleproduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItem = () => {
    try {
      axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        // console.log(res.data, "======");
        const singleproduct = res.data;
        setSingleproduct(singleproduct);
        setLoading(true);
      });
    } catch (err) {
      console.error(err);
    }
  };
  console.log(singleproduct, "single");

  useEffect(() => {
    getItem();
  }, []);

  const { id } = useParams();

  // const item = singleproduct.((i) => console.log(i.id));

  return (
    <div class="container mt-5">
      {loading ? (
        <div className="product_detail_cards">
          <div class="card " style={{ width: "400px" }}>
            <img
              class="card-img-top"
              src={singleproduct.image}
              alt="Card image"
              style={{ width: "80%" }}
            />
          </div>
          <div style={{ width: "400px" }}>
            <ul class="list-group">
              <li class="list-group-item ">
                <h4
                  style={{
                    color: "#8E1111",
                    fontWeight: "600",
                    // fontSize: "18px",
                    // height: "120px",
                  }}
                >
                  {singleproduct.title}
                </h4>
              </li>
              <li class="list-group-item">
                <p>{singleproduct.category}</p>
              </li>
              <li class="list-group-item">
                <h4
                  style={{
                    color: "#0F1111",
                    fontWeight: "800",
                    // height: "30px",
                  }}
                >
                  Price:{singleproduct.price}
                </h4>
              </li>
            </ul>
            <button type="button" class="btn btn-primary btn-sm mt-5">
              ADD TO CART
            </button>
          </div>
        </div>
      ) : (
        <div
          class="d-flex justify-content-center   "
          style={{ marginTop: "200px" }}
        >
          <div class="spinner-border" role="status">
            {/* <span>LOADING</span> */}
          </div>
          <h1>LOADING.....</h1>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
