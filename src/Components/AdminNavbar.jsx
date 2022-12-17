import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
     return (
          <Box h="50px" width={"90%"} m="auto" display={"flex"}>
               <Box
                    width={"30%"}
                    display={"flex"}
                    justifyContent="space-between"
                    m="auto"
               >
                    <Button
                         h="50px"
                         borderRadius={"none"}
                         colorScheme="blackAlpha"
                    >
                         BlackAlpha
                    </Button>
                    <Link to="/admin">
                         <Button
                              h="50px"
                              borderRadius={"none"}
                              colorScheme="blackAlpha"
                         >
                              Dashboard
                         </Button>
                    </Link>
                    <Link to="/admin/add">
                         <Button
                              h="50px"
                              borderRadius={"none"}
                              colorScheme="blackAlpha"
                         >
                              Add Products
                         </Button>
                    </Link>
               </Box>
               <Box display={"flex"} w="250px" justifyContent={"space-around"}>
                    <Button
                         h="50px"
                         borderRadius={"none"}
                         colorScheme="blackAlpha"
                    >
                         Total items - {0}
                    </Button>
                    <Button
                         h="50px"
                         borderRadius={"none"}
                         colorScheme="blackAlpha"
                    >
                         Logout
                    </Button>
               </Box>
          </Box>
     );
};

export default AdminNavbar;
