import React from "react";
import styled from "styled-components";
import FilterSection from "../Components/FilterSection";
import Productspage from "../Components/Productspage";

const Products = () => {
     return (
          <>
               <ProdHeading>
                    <h1>Clothing Product Page</h1>
               </ProdHeading>
               <ProductPageWrapper>
                    <FilterWrapper>
                         <FilterSection />
                    </FilterWrapper>
                    <ProductWrapper>
                         <Productspage />
                    </ProductWrapper>
               </ProductPageWrapper>
          </>
     );
};
const ProductPageWrapper = styled.div`
     display: flex;
     width: 80%;
     margin: 0 auto;
`;

const FilterWrapper = styled.div`
     background-color: #ffffff;
     width: 350px;
     height: 100vh;
     @media all and (max-width: 968px) {
          display: none;
     }
`;
const ProductWrapper = styled.div`
     width: 100%;
     display: grid;
     direction: column;
     grid-template-columns: repeat(auto-fit, minmax(270px, max-content));
     grid-gap: 10px;
     justify-content: center;
     align-items: center;
`;

export const ProdHeading = styled.div`
     width: 100%;
     margin-top: 1rem;
     background-color: #f5f4f2;
     border-bottom: 1px solid #111;
     padding: 2rem 6rem;
     font-size: 2.2rem;
     text-transform: uppercase;
     text-align: center;
     @media all and (max-width: 868px) {
          padding: 5rem 1rem 2rem;
          margin-top: 0rem;
          border-top: 1px solid #111;
     }
`;

export default Products;
