import React from "react";
import Navbar from "./Navbar";
import Pie from "./Pie";
import Title from "./Title";

function Layout({ children }, props) {
  return (
    <>
      <Title />
      <Navbar />
      {children}
      <Pie />
    </>
  );
}

export default Layout;
