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

      <div className="cart__content">
        <div className="item"></div>

        <div className="proceed__checkout">
          <h2>Checkout</h2>

          <div className="free__deliver">
            <h4>icon</h4>
            <span>your Order is eligible for Free Delivery</span>
          </div>

          <h3>Sub-Total : R 122.98</h3>

          <span>Number of item 2</span>

          <small>
            This price is exclusive of taxes. GST will be added during checkout.
          </small>

          <form action="#" method="POST">
            <button className="btn__proceed">Proceed to Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default basket;
