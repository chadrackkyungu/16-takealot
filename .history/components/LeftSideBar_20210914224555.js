import Link from "next/link";
import Image from "next/image";
import styles from "../styles/SideLeftBar.module.css";
import Logo from "../images/takealot-logo.png";

import HomeIcon from "@material-ui/icons/Home";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// * Redux
import { useSelector } from "react-redux";
import { selectItems } from "../Redux/Slice/slices";
import { selectAllFav_Items } from "../Redux/Slice/FavoriteSlice";

function LeftSideBar() {
  const items = useSelector(selectItems);
  const allFav_Item = useSelector(selectAllFav_Items);

  return (
    <div className={styles.leftSideBar}>
      <Link passHref href="/" className={styles.logo}>
        <Image src={Logo} alt="logo" className={styles.img} />
      </Link>

      <div className={styles.icons__container}>
        <div className={styles.tooltip}>
          <Link passHref href="/">
            <HomeIcon fontSize="large" />
          </Link>
          <span className={styles.tooltiptext}>Home</span>
        </div>
        <div className={styles.tooltip}>
          <Link passHref href="/basket">
            <AddShoppingCartIcon fontSize="large" />
          </Link>
          <span className={styles.tooltiptext}>Basket</span>
          <span className={styles.cartLenght}>{items.length}</span>
        </div>
        <div className={styles.tooltip}>
          <Link passHref href="/save">
            <BookmarksIcon fontSize="large" />
          </Link>
          <span className={styles.tooltiptext}>save</span>
          <span className={styles.cartLenght}>{allFav_Item.length}</span>
        </div>
        <div className={styles.tooltip}>
          <Link passHref href="/orders">
            <LocalShippingIcon fontSize="large" />
          </Link>
          <span className={styles.tooltiptext}>Order</span>
        </div>
      </div>

      <div className={styles.avatar}>
        <AccountCircleIcon fontSize="large" />
      </div>
    </div>
  );
}

export default LeftSideBar;
