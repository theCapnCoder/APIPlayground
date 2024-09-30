import { useEffect, useState } from "react";
import axios from "axios";
import { Fruit } from "../../constants/type";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../constants";

import styles from "./fruits.module.scss";
import Card from "./Card/Card";
import DownIcon from "../../assets/DownIcon";
import CategoryList from "../../components/CategoryList/CategoryList";

const Fruits = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleOnClick = (fruit: Fruit) => {
    navigate(`/fruit/${fruit.id}`);
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/all`)
      .then((response) => {
        setFruits(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <section className={styles.vault}>
      <h2>Friuts</h2>
      <CategoryList />

      <h2>Counts: {fruits.length}</h2>

      <div className={styles.fruits}>
        {fruits.map((fruit) => (
          <div
            key={fruit.id}
            className={styles.fruit}
            onClick={() => handleOnClick(fruit)}
          >
            {fruit.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fruits;
