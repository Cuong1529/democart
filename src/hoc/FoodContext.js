import React, { createContext, useState } from "react";

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  return (
    <FoodContext.Provider value={{ name, location, setName, setLocation }}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContext;
