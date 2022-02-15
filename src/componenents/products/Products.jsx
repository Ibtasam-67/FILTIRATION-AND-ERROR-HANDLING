import "./Products.css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const Products = ({ products, error }) => {
  return (
    <>
      {error ? (
        // <div class="row">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // marginRight: "300px",
            paddingTop: "10%",
            paddingRight: "25%",
          }}
        >
          {error && <h1 style={{ color: "red" }}>Search No Result</h1>}
          <p>We're sorry. We cannot find any matches for your search term.</p>
          <BsSearch style={{ fontSize: "50px", cursor: "pointer" }} />
        </div>
      ) : (
        // </div>
        <div class="row">
          {error && <h1 style={{ color: "red" }}>error</h1>}

          {products.map((product) => {
            // console.log(product.id, "id");
            return (
              <div class="col-sm-4 col-xs-12 ">
                <div class="card card_height">
                  <Link to={`product/${product.id}`}>
                    <img
                      src={product.image}
                      class="card-img-top"
                      className="product_img"
                    />
                  </Link>

                  <div class="card-body">
                    <div>
                      <h5
                        class="card-title"
                        style={{ color: "#0F1111", fontWeight: "500" }}
                      >
                        {product.category}
                      </h5>
                    </div>
                    <div>
                      <p
                        class="card-text"
                        style={{
                          color: "#8E1111",
                          fontWeight: "100",
                          fontSize: "18px",
                          // height: "120px",
                        }}
                      >
                        {product.title}
                      </p>
                    </div>
                    <div className="products_height_set">
                      <p
                        style={{
                          color: "#0F1111",
                          fontWeight: "800",
                          // height: "30px",
                        }}
                      >
                        PRICE {product.price}
                      </p>
                    </div>

                    {/* <a href="#" class="btn btn-primary"></a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Products;
