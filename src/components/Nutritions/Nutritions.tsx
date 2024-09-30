import { useState } from "react";

import styles from "./Nutritions.module.scss";

type Nutritions = "calories" | "fat" | "sugar" | "carbohydrates" | "protein";

const Nutritions = () => {
  const [currentNutrition, setCurrentNutrition] = useState<Nutritions | string>(
    "Durian"
  );
  const nutritionsData: Nutritions[] = [
    "fat",
    "sugar",
    "carbohydrates",
    "protein",
  ];

  const handlebutton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nutritions = e.currentTarget.textContent as Nutritions;
    setCurrentNutrition(nutritions);
  };

  // const getFruits = useCallback(() => {
  //   axios.get(`${baseUrl}/${currentNutrition}?min=1&max=1`).then(console.log);
  // }, [currentNutrition]);

  return (
    <div>
      <h2>Current Nutritions: {currentNutrition}</h2>
      <ul className={styles.buttons}>
        {nutritionsData.map((nutrition, index) => (
          <li key={index}>
            <button className={styles.button} onClick={handlebutton}>
              {nutrition}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nutritions;
