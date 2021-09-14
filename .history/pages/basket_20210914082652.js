import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Basket.module.css";

import DoneAllIcon from "@material-ui/icons/DoneAll";

import BasketCart from "../components/BasketCart";

import EmptyBasket from "../images/emptybasket.png";

// *Redux
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../Redux/Slice/slices";

function Basket() {
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
        {total > 0 ? "" : <h2>Your Cart is empty</h2>}
        <h3>{items.length} Items In the Cart</h3>
      </div>

      <div className={styles.cart__content}>
        {/* Display empty image if there is nothing in the cart */}
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
          <h3></h3>
        )}

        {/* each items cart in the Box */}
        <div className={styles.cart__item__container}>
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

        {/* Proceed to checkout cart */}
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
          <small>
            This price is exclusive of taxes. GST will be added during checkout.
          </small>
          {total > 0 ? (
            <form action="#" method="POST">
              <button className={styles.btn__proceed}>
                Proceed to Payment
              </button>
            </form>
          ) : (
            <button className={styles.btn__proceed}>Proceed to Payment</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Basket;
