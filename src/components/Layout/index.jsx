import React from "react";
import { Outlet } from "react-router";
import Header from "../Header";
import Container from "react-bootstrap/Container";

const Layout = () => {
  return (
    <main>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </main>
  );
};

export default Layout;
