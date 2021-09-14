import React from "react";
import Image from "next/image";
import styles from "../styles/Basket.module.css";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

// * redux
import { useDispatch } from "react-redux";

function BasketCart({ id, title, price, description, image }) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(incrementQuantity({ id, title, price, description, image }));
  };

  const decreaseItems = () => {
    dispatch(decrementQuantity({}));
  };

  const remoFromCart = () => {
    dispatch(removeFromBasket({}));
  };

  return (
    <div className={styles.each__cart}>
      <div className={styles.img__cart__container}>
        <Image
          src={image}
          alt="logo"
          className={styles.img}
          width={800}
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
            <button onClick={addItemToBasket}>+</button>

            <div className={styles.delete__btn} onClick={remoFromCart}>
              <DeleteForeverIcon fontSize="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketCart;
