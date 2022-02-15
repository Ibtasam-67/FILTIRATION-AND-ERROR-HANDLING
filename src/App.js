import { Routes, Route } from "react-router-dom";
import MainScreen from "./MainScreen";
import ProductDetails from "./componenents/productDetails/ProductDetails";
import SignupPage from "./componenents/pages/signupPage/SignupPage";

const App = () => {
  return (
    <>
      <SignupPage />
      <Routes>
        {/* <Route path="/" element={<MainScreen />} />
        <Route path="/product/:id" element={<ProductDetails />} /> */}
      </Routes>
    </>
  );
};

export default App;
