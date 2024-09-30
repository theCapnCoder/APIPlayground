import CategoryList from "../../components/CategoryList/CategoryList";

import styles from "./Genus.module.scss";
import { useState } from "react";
import SortList from "../../components/SortList/SortList";
import { useLocation } from "react-router-dom";

const Genus = () => {
  const [value, setValue] = useState<string | null>(null);

  const { pathname } = useLocation();
  const categoryName = pathname.slice(1);

  const handleFetchFruits = (categoryName: string) => {
    setValue(categoryName);
  };

  return (
    <div className={styles.genus}>
      <CategoryList
        categoryName={categoryName}
        onChooseCategory={(categoryName) => {
          handleFetchFruits(categoryName);
        }}
      />

      {value && <SortList categoryName={categoryName} value={value} />}
    </div>
  );
};

export default Genus;
