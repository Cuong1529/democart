import React, { useState, useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREASE":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      break;
  }
};

function ReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const onIncreaseHandler = () => {
    dispatch({type: 'INCREASE'})
  };
  const onDecreaseHandler = () => {
    dispatch({type: 'DECREASE'})
  };

  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={onIncreaseHandler}>Increase</button>
      <button onClick={onDecreaseHandler}>Decrease</button>
    </div>
  );
}

export default ReducerComponent;
