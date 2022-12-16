import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LineWrapper,
  HeadWrapper,
  FormWrapper,
  Vertical,
  FormWrapper2,
  Details,
  BillingWrapper,
  Wrapper,
  ButtonWrap,
} from "../StyledComponents/Payment";
const PaymentPage = () => {
  const [user, setUser] = useState({
    first: "",
    last: "",
    email: "",
    address: "",
    mobile: "",
    street: "",
    Zip: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({...user, [name]:value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
   
  }
  return (
    <div>
      <HeadWrapper>
        <h1>MYTHERESA</h1>
      </HeadWrapper>
      <LineWrapper>
        <p>SHOPPING BAG</p>
        <p>SIGN IN</p>
        <p>DELIVERY</p>
        <p>PAYMENT</p>
        <p>CONFIRM</p>
      </LineWrapper>
      <hr />
      <Vertical></Vertical>
      <Wrapper>
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <p>SHIPPING ADDRESS</p>
            <p>Please enter your shipping address in the form below.</p>
            {/* <RadioWrapper>
            <input type="radio" />
            <p>Ms. *</p>
            <input type="radio" />
            Mrs. *
            <input type="radio" />
            Mrs. *
          </RadioWrapper> */}
            <select>
              <option value="">academic title</option>
              <option value=""></option>
              <option value="">Dr.</option>
              <option value="">Dr. Dr.</option>
              <option value="">Prof.</option>
              <option value="">Prof. Dr.</option>
            </select>
            <input
              type="text"
              placeholder="first name *"
              name="first"
              value={user.first}
              onChange={handleInput}
              required
            />
            <input
              type="text"
              placeholder="last name *"
              name="last"
              value={user.last}
              onChange={handleInput}
              required
            />
            <input type="text" placeholder="company" />
            <input
              type="text"
              placeholder="Email address *"
              name="email"
              value={user.email}
              onChange={handleInput}
              required
            />
            <input
              type="text"
              placeholder="Street *"
              name="street"
              value={user.street}
              onChange={handleInput}
              required
            />
            <input
              type="text"
              placeholder="address line 2 *"
              name="address"
              value={user.address}
              onChange={handleInput}
              required
            />
            <input
              type="text"
              placeholder="Zip code *"
              name="Zip"
              value={user.Zip}
              onChange={handleInput}
              required
            />
            <input type="text" placeholder="city *" />
            <select>
              <option value="">Austria</option>
              <option value="">Australia</option>
              <option value="">France</option>
              <option value="">Finland</option>
              <option value="">India</option>
              <option value="">Russia</option>
              <option value="">Germany</option>
            </select>
            <input
              type="number"
              placeholder="Mobile Phone *"
              name="mobile"
              value={user.mobile}
              onChange={handleInput}
              required
            />
            <Link to="/Checkout"><button>PROCEED TO CHECKOUT</button></Link>
          </form>
        </FormWrapper>
        <Details>
          <p>SHIPPING METHOD</p>
          <span>
            Due to a high volume of orders, delays of up to 5 days may occur. We
            apologize for any inconvenience this may cause.
          </span>
          <p>PACKAGING OPTIONS</p>
          <div>
            <input type="radio" checked/>
            Mytheresa packaging
            <p>Free</p>
            <img
              src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_mytheresa_2x.jpg"
              alt=""
            />
          </div>
          <div>
            <input type="radio" />
            Mytheresa packaging
            <p>Free</p>
            <img
              src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_brown_2x.jpg"
              alt=""
            />
          </div>
          <div>
            <p>CLIMATE NEUTRAL OPTION</p>
            <input type="checkbox" checked/>{" "}
            <span>Help offset the CO2 emission &#8364; 0.40 of your order</span>
          </div>
        </Details>
      </Wrapper>
      {/* <BillingWrapper>
        <p>BILLING ADDRESS</p>
        <p>
          If your billing address differs from your shipping address, please
          click "add billing address".
        </p>
        <button onClick={handleClick}>ADD BILLING ADDRESS</button>
      </BillingWrapper>
      <ButtonWrap>
        <button>BACK TO SHOPPING BAG</button>
      </ButtonWrap> */}
    </div>
  );
};

export default PaymentPage;
