import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Basket.module.css";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoneAllIcon from "@material-ui/icons/DoneAll";

import Banner1 from "../images/Banner/banner1.png";
import Banner2 from "../images/Banner/banner2.png";

// *Redux
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../Redux/Slices/Slices";

function basket() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

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

      <div className={styles.cart__title}>
        <h2>Your Cart</h2>
        <p>2 Items In the Cart</p>
      </div>

      <div className={styles.cart__content}>
        {items.length === 0 ? (
          <h3 style={{ textAlign: "center", fontWeight: "bold", fontSize: 36 }}>
            Shoping Cart is Empty
          </h3>
        ) : (
          <h3 style={{ textAlign: "center", fontWeight: "bold", fontSize: 36 }}>
            Shoping Cart has Items
          </h3>
        )}

        <div className={styles.cart__item__container}>
          {/* *EACH CART IN THE BASKET */}
          <div className={styles.each__cart}>
            <div className={styles.img__cart__container}>
              <Image src={Banner1} alt="logo" className={styles.img} />
            </div>

            <div>
              <p>
                Great outerwear Spring/Autumn/Winter, suitable for many
                occasions, such as working.....
              </p>

              <div className={styles.price__container}>
                <div>
                  <span className={styles.price}>R 45.99 </span>
                  <span className={styles.old__price}>R 55.99 </span>
                </div>

                <div className={styles.btns__container}>
                  <button>-</button>
                  <span>2</span>
                  <button>+</button>

                  <div className={styles.delete__btn}>
                    <DeleteForeverIcon fontSize="large" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.proceed__checkout}>
          <h2>Checkout</h2>

          <div className={styles.free__deliver}>
            <DoneAllIcon />
            <span>your Order is eligible for Free Delivery</span>
          </div>

          <h3>Sub-Total : R 122.98</h3>

          {/* <span>Number of item 2</span> */}

          <small>
            This price is exclusive of taxes. GST will be added during checkout.
          </small>

          <form action="#" method="POST">
            <button className={styles.btn__proceed}>Proceed to Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default basket;
