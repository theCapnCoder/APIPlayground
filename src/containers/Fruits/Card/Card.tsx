import React from "react";
import { Fruit } from "../../../constants/type";

import styles from "./Card.module.scss";

type Props = {
  fruit: Fruit;
};

const Card: React.FC<Props> = ({ fruit }) => {
  return (
    <div className={styles.card}>
      <p>ID: {fruit.id}</p>
      <p>Name: {fruit.name}</p>
      <p>Family: {fruit.family}</p>
      <p>Order: {fruit.order}</p>
      <p>Genus: {fruit.genus}</p>
      <p>Calories: {fruit.nutritions.calories}</p>

      <div className={styles.nutritions}>
        <h3>Nutritions</h3>

        <div className={styles.nutritions__container}>
          <p>F: {fruit.nutritions.fat}</p>
          <p>S: {fruit.nutritions.sugar}</p>
          <p>C: {fruit.nutritions.carbohydrates}</p>
          <p>P: {fruit.nutritions.protein}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
