import React from "react";

// ** Header
import InfoHead from "../components/header/InfoHead";
import NavHeader from "../components/header/NavHeader";
import { Outlet } from "react-router-dom";

const VerticaleLayout = () => {
  return (
    <div>
      <InfoHead />
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default VerticaleLayout;
