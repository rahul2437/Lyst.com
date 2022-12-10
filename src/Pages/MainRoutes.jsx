import React from "react";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
const MainRoutes = () => {
     return (
          <>
               <Navbar />
               <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="*" element={<div>page not found</div>} />
               </Routes>
          </>
     );
};

export default MainRoutes;
