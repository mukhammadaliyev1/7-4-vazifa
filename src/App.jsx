import React, { createContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Detailes from "./pages/Detailes";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Layout from "./Layout/Layout";

export const CartContext = createContext();
export const ThemeContext = createContext();
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();
  const params = useLocation(); //

  useEffect(() => {
    const publicPaths = [
      "/",
      "/register",
      "/about",
      "/detalies",
      "/products",
      "/cart",
      "/login",
    ];

    if (!token && !publicPaths.includes(params.pathname)) {
      navigate("/login");
    }
  }, [token, params.pathname, navigate]);

  function PrivateRoute({ isAuth, children }) {
    if (!isAuth) {
      navigate("/login");
      return null;
    }
    return children;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/products"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />
          <Route
            path="/products/:id"
            element={
              <Layout>
                <Detailes />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/orders"
            element={
              <PrivateRoute isAuth={!!token}>
                <Layout>
                  <Orders />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute isAuth={!!token}>
                <Layout>
                  <Checkout />
                </Layout>
              </PrivateRoute>
            }
          />

          {/* Xato sahifasi */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
