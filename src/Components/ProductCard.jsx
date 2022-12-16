import { BiLink } from "react-icons/bi";
import { ImHeart } from "react-icons/im";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FiHeart } from "react-icons/fi";

const ProductCard = ({ item }) => {
     const { imageUrl, brand, category, color, mrp, price } = item;
     return (
          <Box
               w="280px"
               borderWidth="1px"
               borderRadius="lg"
               p={5}
               margin={"auto"}
          >
               <Image src={imageUrl} alt={"imageAlt"} />
               <HStack justifyContent={"end"}>
                    <FiHeart size={"30px"} bg="red" />
               </HStack>
               <HStack>
                    <Text fontWeight={"bold"}>{brand}</Text>
               </HStack>
               <HStack>
                    <Text>Storm-fit Windrunner Long Parka</Text>
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
          </Box>
     );
};

export default ProductCard;
