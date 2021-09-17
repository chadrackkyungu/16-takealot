import styles from "../styles/Header.module.css";
import Image from "next/image";

// components
import Logo from "../images/takealot-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { useUser } from "@auth0/nextjs-auth0"; //! for authentication

function Header() {
  return (
    <div className={styles.container__header}>
      <div className={styles.header}>
        <div className={styles.input__container}>
          <SearchIcon />
          <input type="text" name="search" placeholder="Search..." />
        </div>

        <div className={styles.logo}>
          <Image src={Logo} alt="logo" className={styles.img} />
        </div>
      </div>
    </div>
  );
}

export default Header;