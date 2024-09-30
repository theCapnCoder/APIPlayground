export const getUniqueValues = (
  list: { [key: string]: string | number | object }[],
  key: string
) => {
  const allValues = list
    .map((item) => item[key])
    .filter((value) => value !== undefined && typeof value === "string");

  if (allValues.length === 0) {
    return [];
  }

  const uniqValues = new Set(allValues);
  return Array.from(uniqValues);
};
