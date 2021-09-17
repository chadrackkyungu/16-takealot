import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/SideLeftBar.module.css";
import Logo from "../images/takealot-logo.png";

import HomeIcon from "@material-ui/icons/Home";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

import LocalShippingIcon from "@material-ui/icons/LocalShipping";

import LoginBtn from "../components-constant/LoginBtn";

// * Redux
import { useSelector } from "react-redux";
import { selectItems } from "../Redux/Slice/slices";
import { selectAllFav_Items } from "../Redux/Slice/FavoriteSlice";

import { useUser } from "@auth0/nextjs-auth0"; //! for authentication

function LeftSideBar() {
  const { error, isLoading } = useUser();

  console.log(user);

  const items = useSelector(selectItems);
  const allFav_Item = useSelector(selectAllFav_Items);

  if (isLoading) return <div className={styles.container}>Loading...</div>;
  if (error) return <div className={styles.container}>{error.message}</div>;

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
        <LoginBtn />
      </div>
    </div>
  );
}

export default LeftSideBar;
