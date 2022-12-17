import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct, getProduct } from "../Redux/AppReducer/action";
const AdminEdit = () => {
     const { id } = useParams();
     //  const albums = useSelector((store) => store.AppReducer.product);
     const { product } = useSelector((store) => store.AppReducer);

     //  const [musicName, setMusicName] = useState("");
     const [productName, setProductName] = useState("");
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const handleSubmit = (e) => {
          e.preventDefault();
          if (productName) {
               const payload = {
                    title: productName,
               };
               dispatch(updateProduct(id, payload)).then(() => {
                    navigate("/");
               });
          }
     };

     useEffect(() => {
          if (product.length === 0) {
               dispatch(getProduct());
          }
     }, [product.length, dispatch]);
     useEffect(() => {
          if (id) {
               const currentMusic = product.find((item) => item.id === id);
               if (currentMusic) {
                    setProductName(currentMusic.title);
               }
          }
     }, [id, product]);

     return (
          <div>
               {/* <h1>EDIT PAGE</h1> */}
               <div>
                    <form onSubmit={handleSubmit}>
                         <div>
                              <label>Edit music name </label>
                              <Input
                                   value={productName}
                                   onChange={(e) =>
                                        setProductName(e.target.value)
                                   }
                              />
                         </div>
                         <button type="submit">Update</button>
                    </form>
               </div>
          </div>
     );
};

export default AdminEdit;
