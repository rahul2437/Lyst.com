import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProduct } from "../Redux/AppReducer/action";
import ProductCard from "./ProductCard";
// import { Link, useLocation, useSearchParams } from "react-router-dom";

const Productspage = () => {
     const location = useLocation();

     const dispatch = useDispatch();
     const data = 10;
     const { product } = useSelector((store) => store.AppReducer);
     const [searchParams] = useSearchParams();

     useEffect(() => {
          if (location || product.length === 0) {
               const saleBy = searchParams.get("sale");
               console.log("saleBy:", saleBy);
               const getProductParams = {
                    params: {
                         category: searchParams.getAll("category"),
                         gender: searchParams.getAll("gender"),
                         sale_gte: saleBy,
                         // _sort: sortBy && "release_year",
                         // _order: sortBy,
                    },
               };
               dispatch(getProduct(getProductParams));
          }
     }, [location.search, product.length, dispatch]);
     return (
          <>
               {product.length > 0 &&
                    product?.map((item) => {
                         return <ProductCard key={item.id} item={item} />;
                    })}
          </>
     );
};

export default Productspage;
