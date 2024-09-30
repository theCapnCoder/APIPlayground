import { Link } from "react-router-dom";

import styles from "./links.module.scss";

const links = ["fruits", "family", "genus", "order"];

const Links = () => {
  return (
    <ul className={styles.links}>
      {links.map((link) => (
        <li className={styles.link} key={link}>
          <Link className={styles.router__link} to={link}>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
