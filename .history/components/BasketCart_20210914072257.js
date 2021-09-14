import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Basket.module.css";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoneAllIcon from "@material-ui/icons/DoneAll";

function BasketCart() {
  return (
    <div>
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
    </div>
  );
}

export default BasketCart;
