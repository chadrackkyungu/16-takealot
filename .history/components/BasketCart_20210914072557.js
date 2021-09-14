import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Basket.module.css";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoneAllIcon from "@material-ui/icons/DoneAll";

function BasketCart() {
  return (
    <div className={styles.cart__content}>
      {items.length === 0 ? (
        <h3 style={{ textAlign: "center", fontWeight: "bold", fontSize: 36 }}>
          <Image
            src={EmptyBasket}
            alt="logo"
            className={styles.img}
            width={500}
            height={500}
          />
        </h3>
      ) : (
        <h3
          style={{ textAlign: "center", fontWeight: "bold", fontSize: 36 }}
        ></h3>
      )}

      <div className={styles.cart__item__container}>
        {items.map((item) => {
          const { id, title, price, description, category, image } = item;
          return (
            <div className={styles.each__cart} key={id}>
              <div className={styles.img__cart__container}>
                <Image
                  src={image}
                  alt="logo"
                  className={styles.img}
                  width={500}
                  height={500}
                />
              </div>

              <div>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.price__container}>
                  <div>
                    <span className={styles.price}>R {price}</span>
                    <span className={styles.old__price}>{price + 15}</span>
                  </div>

                  <div className={styles.btns__container}>
                    <button onClick={decreaseItems}>-</button>
                    <span>{0}</span>
                    <button>+</button>

                    <div className={styles.delete__btn} onClick={remoFromCart}>
                      <DeleteForeverIcon fontSize="large" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.proceed__checkout}>
        <h2>Checkout</h2>

        <div className={styles.free__deliver}>
          <DoneAllIcon />
          {total > 1000 ? (
            <span>your Order is eligible for Free Delivery</span>
          ) : (
            <span>
              Hey did you know? if you Order for 1000+ You Will get free
              delivery
            </span>
          )}
        </div>

        <h3>Sub-Total : R {total}</h3>

        {/* <span>Number of item 2</span> */}

        <small>
          This price is exclusive of taxes. GST will be added during checkout.
        </small>

        <form action="#" method="POST">
          <button className={styles.btn__proceed}>Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
}

export default BasketCart;
