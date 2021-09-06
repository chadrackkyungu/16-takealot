import styles from "../styles/Home.module.css";

import HeaderTitle from "../components-constant/HeaderTitle";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <>
      {/* this is for the header title that appears inthe URL */}
      <HeaderTitle title="Takealot" />
      {/* This is the navBar */}
      <Header />

      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}

export default Layout;
