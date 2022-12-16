import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProduct } from "../Redux/AppReducer/action";
import ProductCard from "./ProductCard";

const Productspage = () => {
     const dispatch = useDispatch();
     const data = 10;
     const { product } = useSelector((store) => store.AppReducer);
     // console.log("product:", product);
     useEffect(() => {
          if (product.length === 0) {
               dispatch(getProduct());
          }
     }, [product.length, dispatch]);
     return (
          <>
               
               {product.length > 0 &&
                    product?.map((item) => {
                         // console.log("item:", item);
                         return <ProductCard key={item.id} item={item} />;
                    })}
          </>
     );
};

// const productWrapper = styled.div`
//      width: 300px;
// `;
export default Productspage;
