import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DUMMY_MEALS from "./constant";
import classes from "./Meal.module.css";

export default function MealDetail() {
  const params = useParams();
  const meal = DUMMY_MEALS.find((meal) => meal.id === params.mealId);
  const [description, setDescription] = useState(meal.description);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const changeDescriptionHandler = (event) => {
    const { value } = event.target;
    setDescription(value);
  };

  useEffect(() => {
    Promise.resolve().then(() => setTotalPrice(quantity * meal.price));
  }, [quantity, meal.price]);

  // useEffect(() => {
  //   console.log("change description without dependency");
  //   document.getElementById('description').innerHTML = description
  // })

  useEffect(() => {
    console.log("change description with dependency");
    // document.getElementById('description').innerHTML = description
    document.title = description
  },[description])
  
  return (
    <section className={classes.meal}>
      <h1>Detail Page</h1>

      <label>Change description: </label>
      <input onChange={changeDescriptionHandler} />
      <table className={classes.detail}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{meal.id}</td>
            <td>{meal.name}</td>
            <td id="description">{description}</td>
            <td>{meal.price}</td>
            <td><input value={quantity} type='number' onChange={(event) => setQuantity(event.target.value)}/></td>
            <td>{totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
