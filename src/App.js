import { Routes, Route } from "react-router-dom";
import MainScreen from "./MainScreen";
import ProductDetails from "./componenents/productDetails/ProductDetails";
import SignupPage from "./componenents/pages/signupPage/SignupPage";
import SigninPage from "./componenents/pages/signinPage/SigninPage";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default App;
