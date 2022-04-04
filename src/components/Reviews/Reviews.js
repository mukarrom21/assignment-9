import React from "react";
import useLaptop from "../../hooks/useLaptop";
import Laptop from "../Laptop/Laptop";

const Reviews = () => {
  const [laptops, useLaptops] = useLaptop();
  return (
    <div className="">
      <h1 className="text-center my-10 font-bold text-4xl text-blue-800">Customers Reviews</h1>
      <div className="grid md:grid-cols-3">
        {laptops.map((laptop) => (
          <Laptop key={laptop.id} laptop={laptop}></Laptop>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
