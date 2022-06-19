import React, { useContext } from "react";
import FoodContext from "./FoodContext";
export default function NameComponent() {
  const food = useContext(FoodContext);
  return (
    <div>
      <h2>
        <strong>Name:</strong>
        {food.name}
      </h2>
    </div>
  );
}
