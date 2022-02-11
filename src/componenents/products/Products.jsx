import "./Products.css";
import { BsSearch } from "react-icons/bs";

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
            return (
              <div class="col-sm-4">
                <div class="card card_height">
                  <img
                    src={product.image}
                    class="card-img-top"
                    className="product_img"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{product.category}</h5>
                    <p class="card-text">{product.title}</p>
                    <a href="#" class="btn btn-primary">
                      {product.price}
                    </a>
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
