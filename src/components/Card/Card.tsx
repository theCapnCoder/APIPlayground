import styles from "./Card.module.scss";
import { Fruit } from "../../constants/type";

type Props = {
  fruit: Fruit;
};

const showNutritions = (fruit: Fruit) => {
  const { calories, fat, sugar, carbohydrates, protein } = fruit.nutritions;

  return (
    <div>
      <ul className={styles.nutritions}>
        <li>🍽️: {calories}</li>
        <li>🧈: {fat}</li>
        <li>🍬: {sugar}</li>
        <li>🍞: {carbohydrates}</li>
        <li>🍗: {protein}</li>
      </ul>
    </div>
  );
};

const Card: React.FC<Props> = ({ fruit }) => {
  return (
    <div className={styles.card}>
      <h2>Name: {fruit.name}</h2>

      <ul>
        <li></li>
        <li>
          <p>Family: {fruit.family}</p>
        </li>
        <li>
          <p>Order: {fruit.order}</p>
        </li>
        <li>
          <p>Genus: {fruit.genus}</p>
        </li>
      </ul>
      {showNutritions(fruit)}
    </div>
  );
};

export default Card;
