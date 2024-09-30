import useFetchFruits from "../../hooks/useFetchFruits";
import { getUniqueValues } from "../../utils/getUniqueValues";
import ErrorMessage from "../Error/ErrorMessage";
import Loading from "../Loading/Loading";
import styles from "./CategoryList.module.scss";

type Props = {
  categoryName: string;
  onChooseCategory: (family: string) => void;
};

const CategoryList: React.FC<Props> = ({ categoryName, onChooseCategory }) => {
  const { data, isLoading, error } = useFetchFruits();

  const handleClick = (categoryName: string) => {
    onChooseCategory(categoryName);
  };

  const categories = getUniqueValues(data, categoryName);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <div className={styles.categoryList}>
      <h2 className={styles.title}>{categoryName}</h2>

      <div className={styles.categories}>
        {categories.length > 0 &&
          categories.map((categoryName, index) => (
            <button key={index} onClick={() => handleClick(categoryName)}>
              {categoryName}
            </button>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
