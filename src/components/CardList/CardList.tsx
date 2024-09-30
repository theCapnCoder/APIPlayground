import { Fruit } from "../../constants/type";
import Card from "../Card/Card";

import styles from "./CardList.module.scss";

type Props = {
  fruits: Fruit[];
};
const CardList: React.FC<Props> = ({ fruits }) => {
  return (
    <div className={styles.cardList}>
      <h2 className={styles.title}>Fruits</h2>

      <div className={styles.cards}>
        {fruits.map((fruit) => (
          <Card key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
