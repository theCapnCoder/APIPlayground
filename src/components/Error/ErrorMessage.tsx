import { PropsWithChildren } from "react";
import styles from "./Error.module.scss";

type Props = PropsWithChildren;

const ErrorMessage: React.FC<Props> = ({ children }) => {
  return <div className={styles.error}>{children}</div>;
};

export default ErrorMessage;
