import MealsSummaryWrapper from "./MealsSummaryWrapper";
import { Component } from "react";

// const MealsSummary = () => {
//   return (
//     <MealsSummaryWrapper>
//       <section className='summary'>
//         <h2>Delicious Food</h2>
//         <p>
//           Choose your favorite meal from our broad selection of available meals
//           and enjoy a delicious lunch or dinner at home.
//         </p>
//         <p>
//           All our meals are cooked with high-quality ingredients, just-in-time
//           and of course by experienced chefs!
//         </p>
//       </section>
//     </MealsSummaryWrapper>
//   );
// };

class MealsSummary extends Component {
  render() {
    return (
      <MealsSummaryWrapper>
        <section className="summary">
          <h2>Delicious Food</h2>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </section>
      </MealsSummaryWrapper>
    );
  }
}

export default MealsSummary;
