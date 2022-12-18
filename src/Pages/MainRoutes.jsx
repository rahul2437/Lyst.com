import React from "react";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Profile from "../Components/Profile";
import AdminDashboard from "./AdminDashboard";
import AdminEdit from "../Components/AdminEdit";
import AddProduct from "../Components/AddProduct";
import Products from "./Products";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/:id/edit" element={<AdminEdit />} />
        <Route path="/admin/add" element={<AddProduct />} />
        <Route path="/product" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
