import React, { useState } from "react";

import styles from "./InputFields.module.scss";

const InputFields = () => {
  const [max, setMax] = useState<number | null>(null);
  const [min, setMin] = useState<number | null>(null);

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMin(Number(e.target.value));

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMax(Number(e.target.value));

  return (
    <div className={styles.inputFields}>
      <div className={styles.input__container}>
        <h3>Min:</h3>
        <input type="number" onChange={handleMin} value={min || ""} />
      </div>
      <div className={styles.input__container}>
        <h3>Max:</h3>
        <input type="number" onChange={handleMax} value={max || ""} />
      </div>
    </div>
  );
};

export default InputFields;
