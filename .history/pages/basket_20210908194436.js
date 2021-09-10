import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Basket.module.css";

function basket() {
  return (
    <div className={styles.basket__container}>
      <div className={styles.welcom__container}>
        <Link passHref href="/">
          <p className={styles.back__btn}>Back</p>
        </Link>
        <p className={styles.user__email}>
          Welcome to Takealot charackkyungu624@gmail.com
        </p>
      </div>

      <div className="cart__title">
        <h2>Your Cart</h2>
        <p>2 Items In the Cart</p>
      </div>
    </div>
  );
}

export default basket;
