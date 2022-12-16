import React, { useState } from "react";
import styled from "styled-components";

const Checkout = () => {
  const [pay, setPay] = useState("");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPay({...pay, [name]:value})
  }

  const handleCard = (e) => {
    e.preventDefault();
    console.log(pay)
  }
  return (
    <div>
      <form onSubmit={handleCard}>
        <Payment>
          <Tag>
            <p>Payment Details</p>
          </Tag>
          <hr />
          <Image>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwxa-b2Uc93ABgxRae-Xi6TxrgihhthoMtLBu-n8JjzdFrVFbhncjgrVpgLB49XOO8zw&usqp=CAU"
              alt="card"
            />
          </Image>
          <CardDetail>
            <Ca>
              <p>CARD NUMBER *</p>
              <input
                type="number"
                placeholder="0000 1111 2222 3333"
                name="card"
                value={pay.card}
                onChange={handleInput}
                required
              />
            </Ca>
            <Middle>
              <M1>
                <p>EXPIRATION DATE *</p>
                <input
                  type="number"
                  placeholder="MM / YY"
                  name="exp"
                  value={pay.exp}
                  onChange={handleInput}
                  required
                />
              </M1>
              <M2>
                <p>CV CODE *</p>
                <input
                  type="password"
                  placeholder="CVC"
                  name="cvc"
                  minlength={3}
                  maxLength={3}
                  value={pay.cvc}
                  onChange={handleInput}
                  required
                />
              </M2>
            </Middle>
            <Owner>
              <p>CARD OWNER *</p>
              <input
                type="text"
                placeholder="Card Owner Name"
                name="name"
                value={pay.name}
                onChange={handleInput}
                required
              />
            </Owner>
          </CardDetail>
          <Submit>
            <button>Confirm Payment </button>
          </Submit>
        </Payment>
      </form>
    </div>
  );
};

export const Payment = styled.div`
  width: 500px;
  margin: auto;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
export const Tag = styled.div`
  padding-top: 2px;
  font-size: 30px;
  font-family: "Times New Roman", Times, serif;
`;

export const Ca = styled.div`
  display: grid;
  margin-left: 30px;
  & input {
    width: 400px;
    padding: 10px;
  }
  & p {
    text-align: left;
  }
`;

export const Image = styled.div``;

export const CardDetail = styled.div``;

export const Middle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 30px;
  & input {
    width: 170px;
    padding: 10px;
  }
`;

export const M1 = styled.div`
  text-align: left;
`;
export const M2 = styled.div`
  text-align: left;
`;

export const Owner = styled.div`
  display: grid;
  margin-left: 30px;
  & input {
    width: 400px;
    padding: 10px;
  }
  & p {
    text-align: left;
  }
`;

export const Submit = styled.div`
  padding: 30px;
  & button {
    border: none;
    font-size: 18px;
    background-color: #84de84;
    color: white;
    padding: 10px 100px;
    cursor: grab;
    border-radius: 5px;
  }
`;

export default Checkout;
