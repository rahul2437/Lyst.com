import React from "react";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import AdminDashboard from "./AdminDashboard";
import AdminEdit from "../Components/AdminEdit";
import AddProduct from "../Components/AddProduct";
import Products from "./Products";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import ProtectedRoute from "./ProtectedRoute";
import Checkout from "./Checkout";
import PaymentPage from "./PaymentPage";
import PaymentSuccess from "./PaymentSuccess";
const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/:id/edit"
          element={
            <ProtectedRoute>
              <AdminEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <PaymentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/paysuccess"
          element={
            <ProtectedRoute>
              <PaymentSuccess />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
      <Footer />
    </>
  );
};
// <Routes>
//   <Route path="/" element={<Homepage />} />
//   <Route path="/login" element={<Login />} />
//   <Route path="/signup" element={<SignUp />} />
//   <Route path="/admin" element={<AdminDashboard />} />
//   <Route path="/admin/:id/edit" element={<AdminEdit />} />
//   <Route path="/admin/add" element={<AddProduct />} />
//   <Route path="/product" element={<Products />} />
//   <Route path="/cart" element={<Cart />} />
//   <Route path="*" element={<div>page not found</div>} />
// </Routes>

export default MainRoutes;
