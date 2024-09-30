import axios from "axios";
import { baseUrl } from "../constants";
import { Fruit } from "../constants/type";

export const fetchSortData = async (
  category: string,
  value: string,
  setIsLoading: (data: boolean) => void,
  setFruitCards: (data: Fruit[]) => void,
  setError: (error: string | null) => void
) => {
  axios
    .get(`${baseUrl}/${category}/${value}`)
    .then((data) => {
      setError(null);
      setFruitCards(data.data);
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => {
      setIsLoading(false);
    });
};
