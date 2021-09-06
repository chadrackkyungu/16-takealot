import Image from "next/image";
import styles from "../styles/SideLeftBar.module.css";
import Logo from "../images/takealot-logo.png";

function LeftSideBar() {
  return (
    <div className={styles.leftSideBar}>
      <div className="logo">
        <Image src={Logo} alt="logo" />
      </div>

      <div className={styles.icons__container}></div>

      <div className={styles.avatar}></div>
    </div>
  );
}

export default LeftSideBar;
