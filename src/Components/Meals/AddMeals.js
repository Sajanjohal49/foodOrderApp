import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem.js";
import styles from "./AddMeals.module.css";
const DummyMeal = [
  {
    id: "m1",
    name: " Tandoori Fish Tikka",
    description:
      "	Fish marinated in lime and ginger and cooked over an open fire.",
    price: 22.9,
  },
  {
    id: "m2",
    name: " Tandoori ChiCken",
    description: "	Tandoori chicken as a dish originated",
    price: 22.9,
  },
  {
    id: "m3",
    name: "Kulche",
    description:
      "Soft, fluffy and easy-to-stuff, North Indian kulchas are made to delight us",
    price: 12.44,
  },
  {
    id: "m4",
    name: "Dhokla",
    description:
      "Gujaratis have given us this soft and delicious snack and for good reason",
    price: 23.44,
  },
];

const AddMeals = () => {
  const mealList = DummyMeal.map((meal) => (
    <MealItem
    id={meal.id}  
    key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <ul>
        <Card>{mealList}</Card>
      </ul>
    </section>
  );
};
export default AddMeals;
