// @ts-nocheck
import React from "react";
import "./App.scss";
// react router v6
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import {
  Home,
  CategoryProduct,
  ProductSingle,
  Cart,
  Search,
} from "./pages/index";

// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />

        <Routes>
          {/* hompage route */}
          <Route path="/" element={<Home />} />
          {/* single product route */}
          <Route path="/product/:id" element={<ProductSingle />} />
          {/* category wise listing route */}
          <Route path="/category/:category" element={<CategoryProduct />} />
          {/* cart */}
          <Route path="/cart" element={<Cart />} />
          {/* searched products */}
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
