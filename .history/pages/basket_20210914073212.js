import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Basket.module.css";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoneAllIcon from "@material-ui/icons/DoneAll";

// import Banner1 from "../images/Banner/banner1.png";
import EmptyBasket from "../images/emptybasket.png";

import BasketCart from "../components/BasketCart";

// *Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  selectItems,
  selectTotal,
  removeFromBasket,
  incrementQuantity,
  decrementQuantity,
} from "../Redux/Slice/slices";

function basket() {
  const dispatch = useDispatch();

  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const addItemToBasket = () => {
    dispatch(incrementQuantity({}));
  };

  const decreaseItems = () => {
    dispatch(decrementQuantity({}));
  };

  const remoFromCart = () => {
    dispatch(removeFromBasket({}));
  };

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
        {total > 0 ? "" : <h2>Your Cart is empty</h2>}
        <h3>{items.length} Items In the Cart</h3>
      </div>
      {items.map((item) => {
        const { id, title, price, description, category, image } = item;
        return (
          <BasketCart
            key={id}
            id={id}
            image={image}
            price={price}
            description={description}
            title={title}
            category={category}
          />
        );
      })}
    </div>
  );
}

export default basket;
