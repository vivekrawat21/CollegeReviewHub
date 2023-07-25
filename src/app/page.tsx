import React from "react";
import Home from "./Home/Page";
import Navbar from "@/components/Navbar";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar/>
      <Home />
    </div>
  );
};

export default page;
