import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";

const Home = ({ data }) => {
  return (
    <div className="row ">
      {data.map((item) => (
        <ProductItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Home;
