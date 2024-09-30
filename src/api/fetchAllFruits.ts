import axios, { AxiosError } from "axios";
import { baseUrl } from "../constants";
import { type Fruit } from "../constants/type";

export const fetchAllFruits = async () => {
  let isLoading = true;
  let errorMessage: string | null = null;
  let data: Fruit[] = [];

  try {
    const response = await axios.get(`${baseUrl}/all`);
    data = response.data;
  } catch (error) {
    errorMessage = (error as AxiosError).message;
  } finally {
    isLoading = false;
  }

  return { data, isLoading, errorMessage };
};
