import "./ProductDetails.css";

import { useParams } from "react-router-dom";

const ProductDetails = ({}) => {
  const { id } = useParams();

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm-8">ONE</div>
          <div class="col-sm-4">TWO</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
