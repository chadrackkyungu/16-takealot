import Image from "next/image";
import styles from "../styles/SideLeftBar.module.css";
import Logo from "../images/takealot-logo.png";

import HomeIcon from "@material-ui/icons/Home";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function LeftSideBar() {
  return (
    <div className={styles.leftSideBar}>
      <div className={styles.logo}>
        <Image src={Logo} alt="logo" className={styles.img} />
      </div>

      <div className={styles.icons__container}>
        <HomeIcon fontSize="large" className={styles.tooltiptext} />
        <AddShoppingCartIcon fontSize="large" className={styles.tooltiptext} />
        <BookmarkBorderIcon fontSize="large" className={styles.tooltiptext} />
        <LocalShippingIcon fontSize="large" className={styles.tooltiptext} />
      </div>

      <div className={styles.avatar}>
        <AccountCircleIcon fontSize="large" className={styles.tooltiptext} />
      </div>
    </div>
  );
}

export default LeftSideBar;
