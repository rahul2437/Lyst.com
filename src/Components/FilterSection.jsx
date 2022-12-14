import {
     Accordion,
     AccordionButton,
     AccordionIcon,
     AccordionItem,
     AccordionPanel,
     Box,
     Heading,
     HStack,
     Radio,
     Stack,
     Text,
     VStack,
} from "@chakra-ui/react";
import React from "react";

const FilterSection = () => {
     return (
          <Box>
               {/* Filter and Clear */}
               <HStack p="2" justify={"space-between"}>
                    <Text as={"h6"}>Filters</Text>
                    <Text as={"h6"}>Clear all</Text>
               </HStack>
               {/* Vertical Menu */}
               <VStack>
                    {/* No filter apply */}

                    <Text p="3" bg={"#F5F4F2"}>
                         No filters applied
                    </Text>

                    {/* accordian */}

                    <Accordion allowToggle>
                         {/* gender acordian */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Gender
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Stack direction="column">
                                        <Radio value="Women's">Women's</Radio>
                                        <Radio value="Men's">Men's</Radio>
                                   </Stack>
                              </AccordionPanel>
                         </AccordionItem>

                         {/* Category Acordian */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Category
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Stack direction="column">
                                        <Radio value="Clothing">Clothing</Radio>
                                        <Radio value="Shoes">Shoes</Radio>
                                        <Radio value="Accessories">
                                             Accessories
                                        </Radio>
                                        <Radio value="Bags">Bags</Radio>
                                        <Radio value="Jewelry">Jewelry</Radio>
                                        <Radio value="Home">Home</Radio>
                                   </Stack>
                              </AccordionPanel>
                         </AccordionItem>

                         {/* Sale Acordian */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Sale
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Stack direction="column">
                                        <Radio value="On sale">On sale</Radio>
                                        <Radio value="20% off or more">
                                             20% off or more
                                        </Radio>
                                        <Radio value="50% off or more">
                                             50% off or more
                                        </Radio>
                                        <Radio value="70% off or more">
                                             70% off or more
                                        </Radio>
                                   </Stack>
                              </AccordionPanel>
                         </AccordionItem>
                    </Accordion>
               </VStack>
          </Box>
     );
};

export default FilterSection;
