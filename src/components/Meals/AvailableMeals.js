import React, { useEffect, Component, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import DUMMY_MEALS from "./constant";
import classes from './AvailableMeals.module.css'

function AvailableMeals() {
  const [isShowGoToTop, setIsShowGoToTop] = useState(false);
  const [meals, setMeals] = useState([])

  useEffect(() => {
    Promise.resolve(DUMMY_MEALS).then((meals) => {
      setMeals(meals)
    });
  }, [])

  useEffect(() => {
    console.log('useEffect...');
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsShowGoToTop(true)
      } else {
        setIsShowGoToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      console.log('component will unmount');
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  const goToTopHandler = () => {
    window.scrollTo(0, 0);
  }
  const availableMeals = meals.map((meal, index) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{availableMeals}</ul>
      </Card>
      {isShowGoToTop && <button onClick={goToTopHandler}
        style={{
          position: 'fixed',
          right: 0,
          bottom: 20
        }
        }>Go to top
      </button>}
    </section>
  );
}

// let timer = null;

// class AvailableMeals extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mealList: [],
//       isResetMeal: false,
//     };
//     this.handleResetMeals = this.handleResetMeals.bind(this);
//   }

// async componentDidMount() {
// await Promise.resolve(DUMMY_MEALS).then((meals) => {
//   this.setState({
//     mealList: meals,
//   });
// });

//     timer = setTimeout(() => alert("Get mealList success"), 3000);

//   }

//   componentWillUnmount() {
//     console.log("Available meals unmount");
//     clearTimeout(timer);
//   }

//   handleResetMeals() {
//     this.setState({
//       isResetMeal: !this.state.isResetMeal,
//     });
//   }

//   render() {
//     console.log("re-render");
//     const meals = this.state.mealList.map((meal, index) => {
//       return (
//         <MealItem
//           id={meal.id}
//           key={meal.id}
//           name={meal.name}
//           description={meal.description}
//           price={meal.price}
//           isResetMeal={this.state.isResetMeal}
//           handleResetMeals={this.handleResetMeals}
//         />
//       );
//     });

//     return (
//       <AvailableMealsWrapper>
//         <section className="meals">
//           <button
//             type="reset"
//             onClick={this.handleResetMeals}
//             className="btnReset"
//           >
//             Reset All
//           </button>
//           <Card>
//             <ul>{meals}</ul>
//           </Card>
//         </section>
//       </AvailableMealsWrapper>
//     );
//   }
// }

export default AvailableMeals;
