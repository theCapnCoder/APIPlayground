import { useState } from "react";
import { Fruit } from "../../constants/type";
import Card from "../Fruits/Card/Card";
import CategoryList from "../../components/CategoryList/CategoryList";

import styles from "./Family.module.scss";
import { fetchSortData } from "../../api/fetchSortData";

const Family = () => {
  const [loading, setLoading] = useState(true);
  const [fruitCards, setFruitCards] = useState<Fruit[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleClick = (nameCategory: string) => {
    fetchSortData("family", nameCategory, setLoading, setFruitCards, setError);
    // axios
    //   .get(`${baseUrl}/family/${nameCategory}`)
    //   .then((data) => {
    //     setError(null);
    //     setFruitCards(data.data);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  return (
    <div className={styles.family}>
      <CategoryList categoryName="family" onClick={handleClick} />

      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && (
        <div className={styles.familyCards}>
          {fruitCards.length > 0 &&
            fruitCards.map((fruit) => <Card key={fruit.id} fruit={fruit} />)}
        </div>
      )}
    </div>
  );
};

export default Family;
