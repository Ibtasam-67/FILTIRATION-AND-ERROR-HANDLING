import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";

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
    <div class="container mt-5 ">
      <div class="row">
        {loading ? (
          <div className="product_detail_cards ">
            <div className="card-pic">
              <div>
                <img
                  class="card-img-top"
                  src={singleproduct.image}
                  alt="Card image"
                  // style={{ width: "80%" }}
                  className="detail_image"
                />
              </div>
            </div>
            <div className="list_group">
              <ul class="list-group">
                <li class="list-group-item ">
                  <h4 className="detail_title">{singleproduct.title}</h4>
                </li>
                <li class="list-group-item ">
                  <h3>{singleproduct.category}</h3>
                </li>
                <div>
                  <li class="list-group-item ">
                    <p className="description">{singleproduct.description}</p>
                  </li>
                </div>

                <li class="list-group-item">
                  <h3
                    style={{
                      color: "#0F1111",
                      fontWeight: "600",
                      // height: "30px",
                    }}
                  >
                    Price:{singleproduct.price}
                  </h3>
                </li>
              </ul>
              <button type="button" class="btn btn-primary btn-sm mt-5">
                ADD TO CART
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center ">
            <Rings color="#00BFFF" height={400} width={1500} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
