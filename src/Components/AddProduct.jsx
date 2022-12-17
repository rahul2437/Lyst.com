import { Box, Button, color, Heading, input, Text } from "@chakra-ui/react";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProducts, getProduct } from "../Redux/AppReducer/action";
import AdminNavbar from "./AdminNavbar";

const initialState = {
     brand: "",
     title: "",
     gender: "",
     category: "",
     sale: "",
     price: "",
     mrp: "",
     freeshipping: false,
     color: "",
     material: "",
     location: "",
     quantity: "",
     desc: "",
     discount: "",
     imgurl: "",
};

const reducerFunction = (state, action) => {
     switch (action.type) {
          case "brand":
               return { ...state, brand: action.payload };
          case "title":
               return { ...state, title: action.payload };
          case "gender":
               return { ...state, gender: action.payload };
          case "category":
               return { ...state, category: action.payload };
          case "sale":
               return { ...state, sale: action.payload };
          case "price":
               return { ...state, price: action.payload };
          case "mrp":
               return { ...state, mrp: action.payload };
          case "freeshipping":
               return { ...state, freeshipping: action.payload };
          case "color":
               return { ...state, color: action.payload };
          case "material":
               return { ...state, material: action.payload };
          case "location":
               return { ...state, location: action.payload };
          case "quantity":
               return { ...state, quantity: action.payload };
          case "desc":
               return { ...state, desc: action.payload };
          case "discount":
               return { ...state, discount: action.payload };
          case "imgurl":
               return { ...state, imgurl: action.payload };
          default:
               return state;
     }
};

const AddProduct = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const [productState, setProductState] = useReducer(
          reducerFunction,
          initialState
     );
     console.log("productState:", productState);
     const addHandler = () => {
          if (JSON.stringify(productState) !== JSON.stringify(initialState)) {
               dispatch(addProducts(productState))
                    .then(() => dispatch(getProduct()))
                    .then(() => {
                         setProductState({
                              brand: "",
                              title: "",
                              gender: "",
                              category: "",
                              sale: "",
                              price: "",
                              mrp: "",
                              freeshipping: "",
                              color: "",
                              material: "",
                              location: "",
                              quantity: "",
                              desc: "",
                              discount: "",
                              imgurl: "",
                         });
                    });
          }
     };

     return (
          <Box>
               <AdminNavbar />
               <Heading textAlign={"center"}>Add Products</Heading>
               <div
                    style={{
                         margin: "auto",
                         display: "flex",
                         flexDirection: "column",
                         width: "500px",
                         gap: "20px",
                         justifyContent: "space-between",
                    }}
               >
                    {/* brand */}
                    <div
                         style={
                              {
                                   // display: "flex",
                                   // flexDirection: "column",
                                   // borderBottom: "1px solid teal",
                              }
                         }
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Product brand *
                         </label>
                         <input
                              type="text"
                              value={productState.brand}
                              onChange={(e) =>
                                   setProductState({
                                        type: "brand",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* title */}
                    <div
                         style={
                              {
                                   // display: "flex",
                                   // flexDirection: "column",
                                   // borderBottom: "1px solid teal",
                              }
                         }
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Product title *
                         </label>
                         <input
                              type="text"
                              value={productState.title}
                              onChange={(e) =>
                                   setProductState({
                                        type: "title",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* image */}
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Product Image *
                         </label>
                         <input
                              type="url"
                              placeholder="Image URL"
                              value={productState.imgurl}
                              onChange={(e) =>
                                   setProductState({
                                        type: "imgurl",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* Product MRP */}
                    <div
                         className="form-element-div"
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Product MRP *
                         </label>
                         <input
                              type="text"
                              value={productState.mrp}
                              onChange={(e) =>
                                   setProductState({
                                        type: "mrp",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* price */}
                    <div
                         className="form-element-div"
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Price *
                         </label>
                         <input
                              type="text"
                              value={productState.price}
                              onChange={(e) =>
                                   setProductState({
                                        type: "price",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* Description */}
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Description *
                         </label>
                         <input
                              type="text"
                              value={productState.desc}
                              onChange={(e) =>
                                   setProductState({
                                        type: "desc",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* sale */}
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              sale *
                         </label>
                         <input
                              type="text"
                              value={productState.sale}
                              onChange={(e) =>
                                   setProductState({
                                        type: "sale",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* material */}
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              material *
                         </label>
                         <input
                              type="text"
                              value={productState.material}
                              onChange={(e) =>
                                   setProductState({
                                        type: "material",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* quantity */}
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              quantity *
                         </label>
                         <input
                              type="text"
                              value={productState.quantity}
                              onChange={(e) =>
                                   setProductState({
                                        type: "quantity",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* discount */}
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              discount *
                         </label>
                         <input
                              type="text"
                              value={productState.discount}
                              onChange={(e) =>
                                   setProductState({
                                        type: "discount",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* category */}
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Product category *
                         </label>
                         <select
                              value={productState.category}
                              onChange={(e) =>
                                   setProductState({
                                        type: "category",
                                        payload: e.target.value,
                                   })
                              }
                         >
                              <option value="">Select Category</option>
                              <option value="Clothing">Clothing</option>
                              <option value="Shoes">Shoes</option>
                              <option value="Accessories">Accessories</option>
                              <option value="Bags">Bags</option>
                              <option value="Jewelry">Jewelry</option>
                              <option value="Home">Home</option>
                         </select>
                    </div>
                    {/* gender */}
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Product gender *
                         </label>
                         <select
                              value={productState.gender}
                              onChange={(e) =>
                                   setProductState({
                                        type: "gender",
                                        payload: e.target.value,
                                   })
                              }
                         >
                              <option value="">Select gender</option>
                              <option value="mens">mens</option>
                              <option value="women">women</option>
                         </select>
                    </div>
                    {/* color */}
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Product color *
                         </label>
                         <select
                              value={productState.color}
                              onChange={(e) =>
                                   setProductState({
                                        type: "color",
                                        payload: e.target.value,
                                   })
                              }
                         >
                              <option value="">Select Category</option>
                              <option value="Black">Black</option>
                              <option value="Brown">Brown</option>
                              <option value="Gray">Gray</option>
                              <option value="Green">Green</option>
                              <option value="Metallic">Metallic</option>
                              <option value="Multicolor">Multicolor</option>
                              <option value="Natural">Natural</option>
                              <option value="Orange">Orange</option>
                              <option value="Pink">Pink</option>
                              <option value="Red">Red</option>
                              <option value="White">White</option>
                              <option value="Yellow">Yellow</option>
                         </select>
                    </div>
                    <div>
                         <Button
                              variant={"solid"}
                              colorScheme={"orange"}
                              data-cy="add-product-button"
                              onClick={addHandler}
                              w="150px"
                              // alignItems="center"
                              // justifyContent="center"
                              marginLeft="200px"
                         >
                              Add Product
                         </Button>
                    </div>
               </div>
          </Box>
     );
};

export default AddProduct;
