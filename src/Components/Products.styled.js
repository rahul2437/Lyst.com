import styled from "styled-components";

export const ProdHeading = styled.div`
  width: 100%;
  margin-top: 6rem;
  background-color: #f5f4f2;
  border-bottom: 1px solid #111;
  padding: 2rem 6rem;
  font-size: 2.2rem;
  text-transform: uppercase;
  @media all and (max-width: 868px) {
    padding: 2rem 1rem;
    margin-top: 4rem;
    border-top: 1px solid #111;
  }
`;

export const AddToCartBtn = styled.button`
  color: #fff;
  width: 100%;
  position: relative;
  padding: 1rem;
  font-weight: 600;
  font-size: 18px;
  &::after,
  &:hover:after {
    top: 32px;
    opacity: 1;
  }
  &:hover:before {
    top: 0px;
    opacity: 1;
  }
`;
