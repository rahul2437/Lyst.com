import {
     Alert,
     AlertIcon,
     Box,
     Button,
     Image,
     Table,
     TableCaption,
     TableContainer,
     Tbody,
     Td,
     Text,
     Tfoot,
     Th,
     Thead,
     Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";
import { deleteProducts, getProduct } from "../Redux/AppReducer/action";
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";

const AdminDashboard = () => {
     const dispatch = useDispatch();
     const { product } = useSelector((store) => store.AppReducer, shallowEqual);
     console.log("product:", product);
     const [count, setCount] = useState("");
     const deleteHandler = (id) => {
          dispatch(deleteProducts(id)).then(() => dispatch(getProduct()));
     };

     useEffect(() => {
          if (product.length === 0) {
               dispatch(getProduct());
          }
     }, [product.length, dispatch]);

     return (
          <Box maxW={"1500px"}>
               <AdminNavbar />
               <TableContainer width={"90%"} m="auto">
                    <Table variant="striped" colorScheme="teal">
                         <Thead>
                              <Tr>
                                   <Th>Sr.no</Th>
                                   <Th>Brand</Th>
                                   {/* <Box> */}
                                   <Th>title</Th>
                                   {/* </Box> */}
                                   <Th>gender</Th>
                                   <Th>category</Th>
                                   {/* <Th isNumeric>sale</Th> */}
                                   <Th isNumeric>price</Th>
                                   {/* <Th isNumeric>mrp</Th> */}
                                   {/* <Th isNumeric>freeshippialse</Th> */}
                                   {/* <Th>color</Th> */}
                                   {/* <Th>material</Th> */}
                                   {/* <Th>location</Th> */}
                                   {/* <Th isNumeric>quantity</Th> */}
                                   {/* <Th>desc</Th> */}
                                   <Th isNumeric>discount</Th>
                                   <Th>imgurl</Th>
                                   <Th>Delete</Th>
                                   <Th>Update</Th>
                              </Tr>
                         </Thead>
                         <Tbody>
                              {product.length > 0 &&
                                   product?.map((item, index) => {
                                        return (
                                             <Tr key={item.id}>
                                                  <Td>{index + 1}</Td>

                                                  <Td>
                                                       <Text
                                                            inlineSize={"150px"}
                                                            overflow="hidden"
                                                            w={"150px"}
                                                       >
                                                            {item.brand}
                                                       </Text>
                                                  </Td>

                                                  <Td>
                                                       <Text
                                                            inlineSize={"150px"}
                                                            overflow="hidden"
                                                            w={"150px"}
                                                       >
                                                            {item.title}
                                                       </Text>
                                                  </Td>

                                                  <Td>{item.gender}</Td>
                                                  <Td>{item.category}</Td>
                                                  {/* <Td isNumeric>
                                                       {item.sale}%
                                                  </Td> */}
                                                  <Td isNumeric>
                                                       ₹{item.price}
                                                  </Td>
                                                  {/* <Td isNumeric>{item.mrp}</Td> */}
                                                  {/* <Td>
                                                       {item.freeshippialse
                                                            ? "Avlible"
                                                            : "Not Applicable"}
                                                  </Td> */}
                                                  {/* <Td>{item.color}</Td> */}
                                                  {/* <Td>{item.material}</Td> */}
                                                  {/* <Td>{item.location}</Td> */}
                                                  {/* <Td isNumeric>
                                                       {item.quantity}
                                                  </Td> */}
                                                  {/* <Td>{item.desc}</Td> */}
                                                  <Td isNumeric>
                                                       {item.discount}%
                                                  </Td>
                                                  <Td>
                                                       <Image
                                                            h="80px"
                                                            src={item.imgurl}
                                                       />
                                                  </Td>
                                                  <Td>
                                                       <Button
                                                            as={Link}
                                                            onClick={() =>
                                                                 deleteHandler(
                                                                      item.id
                                                                 )
                                                            }
                                                       >
                                                            <AiOutlineDelete />
                                                       </Button>
                                                  </Td>
                                                  <Td>
                                                       <Link
                                                            to={`/admin/${item.id}/edit`}
                                                       >
                                                            <Button>
                                                                 <GrUpdate />
                                                            </Button>
                                                       </Link>
                                                  </Td>
                                             </Tr>
                                        );
                                   })}
                         </Tbody>
                         <Tfoot></Tfoot>
                         <TableCaption>
                              {/* Total Count of product : {item.length} */}
                         </TableCaption>
                    </Table>
               </TableContainer>
          </Box>
     );
};

export default AdminDashboard;
