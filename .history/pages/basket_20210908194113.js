import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Basket.module.css";

function basket() {
  return (
    <div>
      <div className={styles.welcom__container}>
        <Link passHref href="/">
          <p className={styles.back__btn}>Back</p>
        </Link>
        <p className={styles.user__email}>
          Welcome to Takealot charackkyungu624@gmail.com
        </p>
      </div>
    </div>
  );
}

export default basket;
