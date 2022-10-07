import React, { useState } from "react";
import Card from "../card";

const Cycles = () => {
  const [params, setParams] = useState({
    sort: "NEW", // OLD, POPULAR
    search: "",
  });
  return (
    <div className="cardContent-wrapper">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cycles;
