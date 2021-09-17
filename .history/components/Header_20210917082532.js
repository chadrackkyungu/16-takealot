import styles from "../styles/Header.module.css";
import Image from "next/image";

// components
import Logo from "../images/takealot-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import LoginBtn from "../components-constant/LoginBtn";
import { useUser } from "@auth0/nextjs-auth0"; //! for authentication

function Header() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div className={styles.container}>Loading...</div>;
  if (error) return <div className={styles.container}>{error.message}</div>;

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

        <div className={styles.hide_navUser}>
          <LoginBtn useLog={user} />
        </div>
      </div>
    </div>
  );
}

export default Header;
