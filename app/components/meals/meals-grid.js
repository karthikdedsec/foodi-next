import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
  console.log(meals);
  return (
    <ul className={classes.meals}>
      {meals.length > 0 &&
        meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        ))}
    </ul>
  );
};
export default MealsGrid;
