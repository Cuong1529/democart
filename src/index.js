import React from "react";
import "./index.css";
import App from "./App";
import AppRouter from "./components/Login/AppRouter";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

// use useContext
// import React from "react";
// import "./index.css";
// import App from "./App";
// import { createRoot } from "react-dom/client";
// import { FoodProvider } from "./hoc/FoodContext";

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//   <FoodProvider>
//     <App />
//   </FoodProvider>
// );
