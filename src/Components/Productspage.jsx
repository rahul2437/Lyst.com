import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/AppReducer/action";
import ProductCard from "./ProductCard";

const Productspage = () => {
     const dispatch = useDispatch();
     const data = 10;
     const { product } = useSelector((store) => store.AppReducer);
     console.log("product:", product);
     useEffect(() => {
          if (product.length === 0) {
               dispatch(getProduct());
          }
     }, [product.length, dispatch]);
     return (
          <>
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
          </>
     );
};

export default Productspage;
