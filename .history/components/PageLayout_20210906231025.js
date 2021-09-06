import styles from "../styles/Home.module.css";

import HeaderTitle from "../components-constant/HeaderTitle";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className={styles.mainApp}>
      <div className={styles.leftHeader}>
        <LeftSideBar />
      </div>
      <div className={styles.rightContent}>
        <HeaderTitle title="Takealot" />
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
