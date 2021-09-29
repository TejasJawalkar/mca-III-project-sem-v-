import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <>
      <Router>
        <Header count={cartItems.length} />
        <div className="dropdown-divider"></div>
        <main>
          <Route exact path={`/`} component={HomeScreen}></Route>
          <Route path={`/product/:id`} component={ProductDetails}></Route>
          <Route path={`/login`} component={LoginScreen} />
          <Route path={`/register`} component={RegisterScreen} />
          <Route path="/cart"></Route>
        </main>
        <div className="dropdown-divider"></div>
        <Footer />
      </Router>
    </>
  );
}

export default App;