import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import Links from "../../components/Links/Links";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Links />
      <Outlet />
    </div>
  );
};

export default MainLayout;
