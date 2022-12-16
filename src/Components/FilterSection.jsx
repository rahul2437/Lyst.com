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
     RadioGroup,
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
import { useSearchParams } from "react-router-dom";

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

     const [searchParams, setSearchParams] = useSearchParams();
     const initialCategory = searchParams.getAll("category");
     const initialGender = searchParams.getAll("gender");
     // console.log("initialGender:", initialGender);
     const [category, setCategory] = useState(initialCategory || []);
     const [gender, setGender] = useState(initialGender || []);
     const [sale, setSale] = useState("");
     const handleFilterCheckBox = (e) => {
          const newCategories = [...category];
          const newGender = [...gender];

          if (
               newCategories.includes(e.target.value) &&
               newGender.includes(e.target.value)
          ) {
               newCategories.splice(newCategories.indexOf(e.target.value), 1);
               newGender.splice(newGender.indexOf(e.target.value), 1);
          } else if (newGender.includes(e.target.value)) {
               newGender.splice(newGender.indexOf(e.target.value), 1);
          } else if (newCategories.includes(e.target.value)) {
               newCategories.splice(newCategories.indexOf(e.target.value), 1);
          } else {
               if (e.target.value == "mens" || e.target.value == "women") {
                    newGender.push(e.target.value);
               } else {
                    newCategories.push(e.target.value);
               }
          }
          setCategory(newCategories);
          setGender(newGender);
     };

     useEffect(() => {
          let params = {};
          console.log("sale:", sale);
          console.log("category:", category);
          category && (params.category = category);
          gender && (params.gender = gender);
          sale && (params.sale = sale);

          // console.log("params", params);
          setSearchParams(params);
     }, [category, setSearchParams, gender, sale]);

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
                                        <Radio
                                             // onChange={handleChange}
                                             type={"radio"}
                                             checked={gender.includes("women")}
                                             onChange={handleFilterCheckBox}
                                             value="women"
                                        >
                                             Women's
                                        </Radio>
                                        <Radio
                                             type={"radio"}
                                             checked={gender.includes("mens")}
                                             onChange={handleFilterCheckBox}
                                             value="mens"
                                        >
                                             Men's
                                        </Radio>
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
                                        <Radio
                                             type={"radio"}
                                             checked={category.includes(
                                                  "Clothing"
                                             )}
                                             onChange={handleFilterCheckBox}
                                             value="Clothing"
                                        >
                                             Clothing
                                        </Radio>
                                        <Radio
                                             type={"radio"}
                                             checked={category.includes(
                                                  "Shoes"
                                             )}
                                             onChange={handleFilterCheckBox}
                                             value="Shoes"
                                        >
                                             Shoes
                                        </Radio>
                                        <Radio
                                             type={"radio"}
                                             checked={category.includes(
                                                  "Accessories"
                                             )}
                                             onChange={handleFilterCheckBox}
                                             value="Accessories"
                                        >
                                             Accessories
                                        </Radio>
                                        <Radio
                                             type={"radio"}
                                             checked={category.includes("Bags")}
                                             onChange={handleFilterCheckBox}
                                             value="Bags"
                                        >
                                             Bags
                                        </Radio>
                                        <Radio
                                             type={"radio"}
                                             checked={category.includes(
                                                  "Jewelry"
                                             )}
                                             onChange={handleFilterCheckBox}
                                             value="Jewelry"
                                        >
                                             Jewelry
                                        </Radio>
                                        <Radio
                                             type={"radio"}
                                             checked={category.includes("Home")}
                                             onChange={handleFilterCheckBox}
                                             value="Home"
                                        >
                                             Home
                                        </Radio>
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
                                   <RadioGroup onChange={setSale} value={sale}>
                                        <Stack direction="column">
                                             <Radio value="">On sale</Radio>
                                             <Radio value="20">
                                                  20% off or more
                                             </Radio>
                                             <Radio value="40">
                                                  50% off or more
                                             </Radio>
                                             <Radio value="70">
                                                  70% off or more
                                             </Radio>
                                        </Stack>
                                   </RadioGroup>
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
                                        {colors?.map((item, index) => (
                                             <Colorbutton
                                                  key={index}
                                                  {...item}
                                             />
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
