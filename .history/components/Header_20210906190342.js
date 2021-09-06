import styles from "../styles/Header.module.css";
import Image from "next/image";

// components
import Logo from "../images/takealot-logo.png";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="container__header">
      <div className={styles.header}>
        <div className="input__container">
          <SearchIcon />
          <input type="text" name="search" placeholder="Search..." />
        </div>

        <div className="logo">
          <Image src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
