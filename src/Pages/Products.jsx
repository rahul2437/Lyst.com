import React from "react";
import styled from "styled-components";
import FilterSection from "../Components/FilterSection";
import Productspage from "../Components/Productspage";

const Products = () => {
     return (
          <ProductPageWrapper>
               <FilterWrapper>
                    <FilterSection />
               </FilterWrapper>
               <ProductWrapper>
                    <Productspage />
               </ProductWrapper>
          </ProductPageWrapper>
     );
};
const ProductPageWrapper = styled.div`
     display: flex;
     border: 1px solid red;
`;
const FilterWrapper = styled.div`
     background-color: #ffffff;
     width: 350px;
     border: 1px solid black;
`;
const ProductWrapper = styled.div`
     width: 100%;
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
     grid-gap: 20px;
     justify-content: center;
     border: 10px solid green;
`;

export default Products;
