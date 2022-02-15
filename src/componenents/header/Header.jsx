import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = ({ onChange }) => {
  return (
    <>
      <nav class="navbar navbar-light  " style={{ backgroundColor: "#232F3E" }}>
        <div class="container-fluid ">
          {/* <Link to="/"> */}
          <a class="navbar-brand " style={{ color: "white" }}>
            Navbar
          </a>
          {/* </Link> */}

          <div class="row">
            <form class="d-flex">
              <input
                className="form-control me-4 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => onChange(e.target.value)}
              />
              <button
                class="btn btn-outline-success"
                style={{ backgroundColor: "white", color: "grey" }}
                type="submit"
              >
                Search
              </button>

              {/* <Link to="/product">
              <h6>Pro details</h6>
            </Link> */}
            </form>
          </div>
          <div class="row-sm-2 ">
            <a style={{ color: "white", marginRight: "30px" }}>
              <AiOutlineShoppingCart />
              Add to Cart
            </a>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <a style={{ color: "white" }}>
                <RiAdminFill />
                Sign In
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
