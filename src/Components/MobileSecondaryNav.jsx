import React, { useState } from "react";
import {
  MobileSecButton,
  MobileSecDiv,
  MobileSecLink,
} from "./ResponsiveNav.styled";
import { useNavigate } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const MobileSecondaryNav = ({ setHamActive }) => {
  const [ActiveLink, setActiveLink] = useState("Women");
  const navigate = useNavigate();
  return (
    <>
      <MobileSecDiv>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <p
            className="text-xl"
            style={
              ActiveLink === "Women"
                ? { fontWeight: "Bold" }
                : { fontWeight: "200" }
            }
            onClick={() => setActiveLink("Women")}
          >
            WOMEN
          </p>
          <p
            className="text-xl ml-20"
            style={
              ActiveLink === "Men"
                ? { fontWeight: "Bold" }
                : { fontWeight: "200" }
            }
            onClick={() => setActiveLink("Men")}
          >
            MEN
          </p>
        </div>
        <div
          className="flex"
          style={
            ActiveLink === "Men"
              ? {
                  transform: "translate(-100%)",
                  transition: "transform .35s cubic-bezier(.23,1,.32,1) 0s",
                }
              : {
                  transform: "translate(0)",
                  transition: "transform .35s cubic-bezier(.23,1,.32,1) 0s",
                }
          }
        >
          <MobileSecLink>
            <MobileSecButton>
              <div
                onClick={() => {
                  navigate("/product");
                  setHamActive(false);
                }}
              >
                {" "}
                Clothing{" "}
              </div>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <div
                onClick={() => {
                  navigate("/product");
                  setHamActive(false);
                }}
              >
                {" "}
                Shoes{" "}
              </div>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <div
                onClick={() => {
                  navigate("/product");
                  setHamActive(false);
                }}
              >
                {" "}
                Accessories{" "}
              </div>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <div
                onClick={() => {
                  navigate("/product");
                  setHamActive(false);
                }}
              >
                {" "}
                Bags{" "}
              </div>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <div
                onClick={() => {
                  navigate("/product");
                  setHamActive(false);
                }}
              >
                {" "}
                Jewelery{" "}
              </div>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <div
                onClick={() => {
                  navigate("/product");
                  setHamActive(false);
                }}
              >
                {" "}
                Popular Brands{" "}
              </div>
              <ArrowForwardIcon className="absolute top-4 right-5" />
            </MobileSecButton>
            <MobileSecButton>
              <div
                onClick={() => {
                  navigate("/product");
                  setHamActive(false);
                }}
              >
                All {ActiveLink}'s
              </div>
            </MobileSecButton>
            <MobileSecButton>
              <div
                onClick={() => {
                  navigate("/product");
                  setHamActive(false);
                }}
              >
                Sale
              </div>
            </MobileSecButton>
            <p style={{ padding: "12px" }} className="p-4">
              Country:IN - US$
            </p>
            <p style={{ padding: "12px" }} className="p-4">
              Help Center
            </p>
            <p style={{ padding: "12px" }} className="p-4">
              Contact us
            </p>
            <p style={{ padding: "12px" }} className="p-4">
              About us
            </p>
            <p style={{ padding: "12px" }} className="p-4">
              Careers
            </p>
          </MobileSecLink>
        </div>
      </MobileSecDiv>
    </>
  );
};

export default MobileSecondaryNav;
