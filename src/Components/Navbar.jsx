import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { useScrollTrigger } from "@mui/material";
// import Badge from "@mui/material/Badge";
import { Badge, HStack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import {
  BottomNav,
  InputDiv,
  Nav,
  NavButton,
  NavInput,
  TopNav,
} from "./Navbar.styled";
import SecondaryNav from "./SecondaryNav";
import data from "../db.json";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return children;
}
const Navbar = (props) => {
  const cart = useSelector((store) => store.cartReducer.cart);
  const getCartQuantity = () => {
    let total = 0;
    cart.forEach((element) => {
      total += element.quantity;
    });
    return total;
  };

  const isLoggedIn = true;

  const [activeProd, setActiveProd] = useState(false);
  const [activeLink, setActiveLink] = useState("Men");

  return (
    <>
      <HideOnScroll {...props}>
        <Nav>
          <TopNav>
            <p className="cursor-pointer">IN - US$</p>
            <Menu>
              <MenuButton rightIcon={<ChevronDownIcon />}>
                Help
                <ChevronDownIcon style={{ fontSize: "1rem" }} />
              </MenuButton>
              <MenuList>
                <MenuGroup textAlign={"center"}>
                  <MenuItem>Help Center</MenuItem>
                  <MenuDivider />
                  <MenuItem>Contact us </MenuItem>
                  <MenuDivider />
                  <MenuItem>About us</MenuItem>
                  <MenuDivider />
                  <MenuItem>Careers</MenuItem>
                  <MenuDivider />
                  <Link to="/admin">
                    <MenuItem>Admin</MenuItem>
                  </Link>
                </MenuGroup>
              </MenuList>
            </Menu>

            {isLoggedIn && (
              <Menu>
                <MenuButton rightIcon={<ChevronDownIcon />}>
                  Account
                  <ChevronDownIcon style={{ fontSize: "1rem" }} />
                </MenuButton>
                <MenuList>
                  <MenuGroup textAlign={"center"}>
                    <MenuItem>{"current user name"}</MenuItem>
                    <MenuDivider />
                    <MenuItem>Logout</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            )}

            {isLoggedIn && (
              <Link to="/cart">
                <HStack>
                  <BsCart fontSize={"20px"} color="action" />{" "}
                  <span>{getCartQuantity() || 0}</span>
                </HStack>
              </Link>
            )}

            {!isLoggedIn && (
              <Link to="/signup">
                <NavButton className="hover:underline">
                  <Link to="/login">
                    <p className="hover:underline">Sign up or Login</p>
                  </Link>
                </NavButton>
              </Link>
            )}
          </TopNav>

          <BottomNav>
            <Link to="/" style={{ width: "6rem", marginLeft: "1rem" }}>
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1515.903 476.323"
              >
                <path d="M164.033 11.984H0v454.25h336.268V311.658H164.033V11.984zm403.756.002l-67.975 126.463-67.343-126.463H279.634l136.904 282.01v172.235h163.401V292.738L720.631 11.986H567.789zm496.761 203.78c-15.137-10.51-31.965-17.694-50.47-23.59a511.081 511.081 0 00-56.778-14.507q-41.641-7.577-64.356-13.567c-15.142-3.992-25.23-9.476-26.776-20.89-.615-4.519.026-15.222 6.364-21.377 8.417-8.178 19.364-10.753 32.399-11.122 21.447-.605 28.416 3.039 35.785 8.716 7.352 5.682 12.105 17.45 12.105 30.44v1.262h154v-1.894c-2.948-52.573-21.452-87.193-55.516-112.016Q1000.195.002 909.984 0 813.46 0 761.721 41.009q-51.738 41.015-51.733 111.037 0 35.96 12.617 60.25a108.707 108.707 0 0034.07 39.428 190.67 190.67 0 0049.213 23.977 476.516 476.516 0 0056.147 14.512q42.893 7.562 66.875 14.512c15.978 4.628 28.044 12.408 28.044 23.34 0 10.36-4.609 17.58-9.58 21.711-5.08 4.23-16.788 8.51-29.823 8.51-15.138 0-27.621-4.066-35.401-10.166-7.787-6.09-15.149-18.086-15.98-29.869l-.202-3.783h-162.29v1.263c1.263 35.332 8.302 61.228 21.133 85.832q19.24 36.906 63.412 55.84 22.707 9.455 52.99 14.193 30.29 4.728 68.77 4.728 103.46 0 153.309-41.318 49.828-41.32 49.839-115.77 0-37.226-13.25-62.461a115.457 115.457 0 00-35.331-41.01zm75.339-203.781V151.17h109.779v315.06h157.724V151.17h108.511V11.985h-376.014z"></path>
              </svg>
            </Link>
            <p
              className="text-base cursor-pointer"
              style={
                activeLink === "Women"
                  ? {
                      borderBottom: "1.6px solid #111",
                    }
                  : { border: "none" }
              }
              onClick={() => {
                if (activeProd && activeLink === "Men") {
                  setActiveLink("Women");
                  return;
                }
                setActiveProd(!activeProd);
                setActiveLink("Women");
              }}
            >
              WOMEN
            </p>
            <p
              className="text-base cursor-pointer"
              style={
                activeLink === "Men"
                  ? {
                      borderBottom: "1.6px solid #111",
                    }
                  : { border: "none" }
              }
              onClick={() => {
                if (activeProd && activeLink === "Women") {
                  setActiveLink("Men");
                  return;
                }
                setActiveProd(!activeProd);
                setActiveLink("Men");
              }}
            >
              MEN
            </p>
            <InputDiv>
              <SearchIcon />
              <NavInput
                placeholder={
                  activeLink === "Men"
                    ? 'SEARCH (E.G. "Acne Jeans")'
                    : 'SEARCH (E.G. "Valentino dresses")'
                }
              ></NavInput>
            </InputDiv>
          </BottomNav>
        </Nav>
        <MobileNav />
        <SecondaryNav
          active={activeProd}
          setActiveProd={setActiveProd}
          link={activeLink}
        />
      </HideOnScroll>
    </>
  );
};

export default Navbar;
