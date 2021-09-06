import styles from "../styles/Home.module.css";

import HeaderTitle from "../components-constant/HeaderTitle";
import Header from "../components/Header";
import LeftSideBar from "./LeftSideBar";

function Layout({ children }) {
  return (
    <div className={styles.mainApp}>
      <div className={styles.leftHeader}>
        <LeftSideBar />
      </div>
      <div className={styles.rightContent}>
        {/* this is for the header title that appears inthe URL */}
        <HeaderTitle title="Takealot" />
        {/* This is the navBar */}
        <Header />

        <div className={styles.container}>
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
