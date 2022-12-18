import { BiLink } from "react-icons/bi";
import {
     Box,
     HStack,
     Image,
     Modal,
     ModalBody,
     ModalCloseButton,
     ModalContent,
     ModalOverlay,
     Text,
     Accordion,
     AccordionItem,
     AccordionButton,
     AccordionPanel,
     AccordionIcon,
} from "@chakra-ui/react";

import React from "react";
import { FiHeart } from "react-icons/fi";
import { useDisclosure } from "@chakra-ui/react";

import { AddToCartBtn } from "./Products.styled";
import styled from "styled-components";
const ProductCard = ({ item }) => {
     const { imgurl, brand, category, color, mrp, title, price, desc } = item;
     const { isOpen, onOpen, onClose } = useDisclosure();

     return (
          <>
               <Box
                    onClick={onOpen}
                    _hover={{
                         boxShadow: "2xl",
                         cursor: "pointer",
                    }}
                    w="270px"
                    p={3}
                    mt={3}
                    boxShadow={"md"}
                    rounded="md"
                    bg="white"
               >
                    <Image src={imgurl} alt={"imageAlt"} />
                    <HStack justifyContent={"end"}>
                         <FiHeart size={"30px"} bg="red" />
                    </HStack>
                    <HStack>
                         <Text fontWeight={"bold"}>{brand}</Text>
                    </HStack>
                    <HStack>
                         <Text>{title}</Text>
                    </HStack>
                    <HStack>
                         <Text>{category} -</Text>
                         <Text>{color}</Text>
                    </HStack>
                    <HStack>
                         <Text>
                              <s>${mrp}</s>
                         </Text>
                         <Text fontWeight={"medium"} color={"red"}>
                              ${price}
                         </Text>
                    </HStack>
                    <HStack>
                         <BiLink />
                         <Text>scotts</Text>
                    </HStack>

                    <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
                         <ModalOverlay />
                         <ModalContent>
                              <ModalBody>
                                   <ProductDiv>
                                        <ModalCloseButton />

                                        <img
                                             style={{}}
                                             width="300px"
                                             src={imgurl}
                                             alt={title}
                                        />
                                        <div style={{ width: "300px" }}>
                                             <Text
                                                  fontSize="2xl"
                                                  style={{ fontWeight: "bold" }}
                                             >
                                                  {title}
                                             </Text>
                                             <Text
                                                  fontSize={"xl"}
                                                  fontWeight={"normal"}
                                             >
                                                  {desc}
                                             </Text>
                                             <br />
                                             <div className="flex items-center mb-1">
                                                  <p className="text-[#f9302d] font-extrabold text-2xl">
                                                       Price {"  "}
                                                       <Text as={"s"}>
                                                            ${mrp}
                                                       </Text>{" "}
                                                       ${price}
                                                  </p>
                                             </div>
                                             <Text
                                                  mt={2}
                                                  fontSize={"l"}
                                                  className="text-sm text-gray-500"
                                             >
                                                  From{" "}
                                                  <span
                                                       style={{
                                                            fontWeight: "bold",
                                                       }}
                                                  >
                                                       {brand}
                                                  </span>
                                             </Text>
                                             <div
                                                  style={{
                                                       backgroundColor: "#000",
                                                       textAlign: "center",
                                                       cursor: "pointer",
                                                       marginTop: "15px",
                                                       color: "#fff",
                                                  }}
                                                  onClick={() => {
                                                       console.log(
                                                            "i will check login "
                                                       );
                                                       // if (isLoggedIn) {
                                                       //   addToCart();
                                                       //   handleClick();
                                                       // } else {
                                                       //   navigate("/login");
                                                       // }
                                                  }}
                                             >
                                                  <AddToCartBtn>
                                                       Add to cart
                                                  </AddToCartBtn>
                                             </div>
                                             <Accordion>
                                                  <AccordionItem>
                                                       <h2>
                                                            <AccordionButton>
                                                                 <Box
                                                                      as="span"
                                                                      flex="1"
                                                                      textAlign="left"
                                                                 >
                                                                      Product
                                                                      Details
                                                                 </Box>
                                                                 <AccordionIcon />
                                                            </AccordionButton>
                                                       </h2>
                                                       <AccordionPanel pb={4}>
                                                            99% Cotton, 1%
                                                            Elastane. Made in
                                                            Italy. {desc}
                                                       </AccordionPanel>
                                                  </AccordionItem>
                                             </Accordion>
                                        </div>
                                   </ProductDiv>
                              </ModalBody>
                         </ModalContent>
                    </Modal>
               </Box>
          </>
     );
};

const ProductDiv = styled.div`
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-around;
     padding: 14px;
`;

export default ProductCard;
