import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../constants";
import { Fruit as FruitT } from "../../constants/type";

import styles from "./Fruit.module.scss";

const Fruit = () => {
  const [loading, setLoading] = useState(true);
  const [fruit, setFruit] = useState<FruitT>({} as FruitT);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((data) => {
        setFruit(data.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleClick = () => {
    navigate(-1);
  };

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p>ID: {fruit.id}</p>
        <p>Name: {fruit.name}</p>
        <p>Family: {fruit.family}</p>
        <p>Order: {fruit.order}</p>
        <p>Genus: {fruit.genus}</p>
      </div>

      <div className={styles.nutritions}>
        <h3>Nutritions</h3>
        <div className={styles.nutritions__container}>
          <p>Calories: {fruit.nutritions.calories}</p>
          <p>Fat: {fruit.nutritions.fat}</p>
          <p>Sugar: {fruit.nutritions.sugar}</p>
          <p>Carbohydrates: {fruit.nutritions.carbohydrates}</p>
          <p>Protein: {fruit.nutritions.protein}</p>
        </div>
      </div>

      <button className={styles.button} onClick={handleClick}>
        Back
      </button>
    </div>
  );
};

export default Fruit;
