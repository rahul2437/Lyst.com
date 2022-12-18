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
<<<<<<< HEAD
import ProtectedRoute from "./ProtectedRoute";
import Checkout from "./Checkout";
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
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
      <Footer />
    </>
  );
=======
import Sale from "./Sale";
import AllMens from "./AllMens";
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
                    <Route path="/sale" element={<Sale />} />
                    <Route path="/allMens" element={<AllMens />} />
                    <Route path="*" element={<div>page not found</div>} />
               </Routes>
               <Footer />
          </>
     );
>>>>>>> 7f5ff7b11929cc664d9f41772b4136cdff694cd7
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
