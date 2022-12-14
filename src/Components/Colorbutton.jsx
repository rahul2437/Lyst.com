import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";

const Colorbutton = ({ name, value }) => {
     return (
          <HStack>
               <Box
                    h={"10px"}
                    w={"10px"}
                    style={{ backgroundColor: value }}
               ></Box>
               <div style={{ width: "80px" }}>{name}</div>
          </HStack>
     );
};

export default Colorbutton;
