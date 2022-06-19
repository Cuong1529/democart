import React, { useContext } from "react";
import FoodContext from "./FoodContext";

export default function LocationComponent() {
  const food = useContext(FoodContext);
  return (
    <div>
      <h2>
        <strong>Location:</strong>
        {food.location}
      </h2>
    </div>
  );
}
