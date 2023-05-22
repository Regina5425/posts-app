import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <header>Header</header>

      <Outlet />
    </>
  );
};

export default Layout;
