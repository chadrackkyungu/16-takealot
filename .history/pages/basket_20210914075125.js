import React from "react";
import Link from "next/link";
// import Image from "next/image";
import styles from "../styles/Basket.module.css";

import BasketCart from "../components/BasketCart";

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
    </div>
  );
}

export default Basket;
