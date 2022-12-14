import {
     Accordion,
     AccordionButton,
     AccordionIcon,
     AccordionItem,
     AccordionPanel,
     Box,
     Checkbox,
     HStack,
     Radio,
     Select,
     Stack,
     Text,
     VStack,
} from "@chakra-ui/react";
import { material } from "../utils/material";
import { colors } from "../utils/color";

import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { minPrice } from "../utils/minPrice";
import { maxPrice } from "../utils/maxPrice";
import { designers } from "../utils/designers";
import Colorbutton from "./Colorbutton";
import { stores } from "../utils/stores";

const FilterSection = () => {
     const [query, setQuery] = useState("");
     const [store, setStore] = useState("");
     const [suggestions, setSuggestions] = useState([]);
     const [newSuggestions, setNewSuggestions] = useState([]);
     const queryHandler = useCallback((val) => {
          setQuery(val);
     }, []);
     const queryFromStore = useCallback((val) => {
          setStore(val);
     }, []);
     useEffect(() => {
          if (query === "" && store === "") {
               setSuggestions([]);
               setNewSuggestions([]);
          } else {
               let textQuery = query.trim().toLocaleLowerCase();
               let storeQuery = store.trim().toLocaleLowerCase();
               if (textQuery !== "") {
                    let myNewSuggestions = designers
                         .filter((item) => {
                              return item.label
                                   .toLowerCase()
                                   .indexOf(textQuery) !== -1
                                   ? true
                                   : false;
                         })
                         .map((item) => item.label);
                    setSuggestions(myNewSuggestions);
                    console.log(myNewSuggestions);
               }
               if (storeQuery !== "") {
                    console.log("stores", stores);
                    let storeSuggestions = stores
                         .filter((item) => {
                              return item.label
                                   .toLowerCase()
                                   .indexOf(storeQuery) !== -1
                                   ? true
                                   : false;
                         })
                         .map((item) => item.label);
                    setNewSuggestions(storeSuggestions);
                    console.log(storeSuggestions);
               }
          }
     }, [query, store]);
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

                    {/* Accordion */}

                    <Accordion
                         //  border={"1px solid red"}
                         width="350px"
                         allowToggle
                    >
                         {/* gender Accordion */}
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
                         {/* Category Accordion */}
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
                         {/* Sale Accordion */}
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
                         {/* Price Accordion */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Price
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <HStack direction="column">
                                        <Box>
                                             <label htmlFor="Min-price">
                                                  Min price
                                             </label>
                                             <Select placeholder="$0">
                                                  {minPrice.map(
                                                       (item, index) => (
                                                            <option
                                                                 key={index}
                                                                 value={
                                                                      item.value
                                                                 }
                                                            >
                                                                 {item.label}
                                                            </option>
                                                       )
                                                  )}
                                             </Select>
                                        </Box>
                                        <Box>
                                             <label htmlFor="Max price">
                                                  Max price
                                             </label>
                                             <Select placeholder=" $1000">
                                                  {maxPrice.map(
                                                       (item, index) => (
                                                            <option
                                                                 key={index}
                                                                 value={
                                                                      item.value
                                                                 }
                                                            >
                                                                 {item.label}
                                                            </option>
                                                       )
                                                  )}
                                             </Select>
                                        </Box>
                                   </HStack>
                              </AccordionPanel>
                         </AccordionItem>
                         {/* shipping Accordion */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Shipping
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Stack direction="column">
                                        <Checkbox>Free shipping</Checkbox>
                                   </Stack>
                              </AccordionPanel>
                         </AccordionItem>
                         {/* Color Accordion */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Color
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Stack direction="row" wrap={"wrap"}>
                                        {/* <Checkbox>Free shipping</Checkbox> */}
                                        {colors?.map((item) => (
                                             <Colorbutton {...item} />
                                        ))}
                                   </Stack>
                              </AccordionPanel>
                         </AccordionItem>
                         {/* Material Accordion */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Material
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Stack direction="column">
                                        {material.map((item, index) => (
                                             <Checkbox
                                                  key={index}
                                                  value={item.value}
                                             >
                                                  {item.label}
                                             </Checkbox>
                                        ))}
                                        {/* <Checkbox></Checkbox> */}
                                   </Stack>
                              </AccordionPanel>
                         </AccordionItem>
                         {/* Designers Accordion */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Designers
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Stack direction="column">
                                        <SearchBar
                                             queryHandler={queryHandler}
                                             suggestions={suggestions}
                                        />
                                   </Stack>
                              </AccordionPanel>
                         </AccordionItem>
                         {/* Stores AccordionItem */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Stores
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Stack direction="column">
                                        <SearchBar
                                             queryHandler={queryFromStore}
                                             suggestions={newSuggestions}
                                             // placeholder="Search for store"
                                        />
                                   </Stack>
                              </AccordionPanel>
                         </AccordionItem>
                    </Accordion>
               </VStack>
          </Box>
     );
};

export default FilterSection;
