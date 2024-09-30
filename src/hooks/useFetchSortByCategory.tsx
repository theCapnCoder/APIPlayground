import axios from "axios";
import { useEffect, useState } from "react";
import { type Fruit } from "../constants/type";
import { baseUrl } from "../constants";

const useFetchSortByCategory = (category: string, value: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Fruit[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${category}/${value}`)
      .then((response) => {
        setError(null);
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category, value]);

  return { data, isLoading, error };
};

export default useFetchSortByCategory;
