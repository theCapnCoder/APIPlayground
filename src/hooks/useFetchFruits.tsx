import { useEffect, useState } from "react";
import { type Fruit } from "../constants/type";
import axios from "axios";
import { baseUrl } from "../constants";

const useFetchFruits = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Fruit[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/all`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
};

export default useFetchFruits;
