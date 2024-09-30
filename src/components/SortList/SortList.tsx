import React from "react";
import useFetchSortByCategory from "../../hooks/useFetchSortByCategory";
import CardList from "../CardList/CardList";
import LoadingErrorHandler from "../LoadingErrorHandler/LoadingErrorHandler";

type Props = {
  categoryName: string;
  value: string;
};

const SortList: React.FC<Props> = ({ categoryName, value }) => {
  const {
    data: fruits,
    isLoading,
    error,
  } = useFetchSortByCategory(categoryName, value);

  if (!value) {
    return null;
  }

  return (
    <LoadingErrorHandler isLoading={isLoading} error={error}>
      <CardList fruits={fruits} />
    </LoadingErrorHandler>
  );
};

export default SortList;
