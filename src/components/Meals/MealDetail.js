import React from "react";
import { useParams } from "react-router-dom";
import DUMMY_MEALS from "./constant";
import classes from "./Meal.module.css";

export default function MealDetail() {
  const params = useParams();

  const meal = DUMMY_MEALS.find((meal) => meal.id === params.mealId);
  return (
    <section className={classes.meal}>
      <h1>Detail Page</h1>
      <table className={classes.detail}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{meal.id}</td>
            <td>{meal.name}</td>
            <td>{meal.description}</td>
            <td>{meal.price}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
