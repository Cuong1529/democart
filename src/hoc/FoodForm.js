import React, { useContext } from "react";
import FoodContext from "./FoodContext";

export default function FoodForm() {
  const food = useContext(FoodContext);
  return (
    <div>
      <div>
        <label>Name: </label>
        <input onChange={(event) => food.setName(event.target.value)}/>
      </div>
      <div>
        <label>Location: </label>
        <input onChange={(event) => food.setLocation(event.target.value)}/>
      </div>
    </div>
  );
}
