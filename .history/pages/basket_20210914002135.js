import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Basket.module.css";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoneAllIcon from "@material-ui/icons/DoneAll";

// import Banner1 from "../images/Banner/banner1.png";
import EmptyBasket from "../images/emptybasket.png";

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

  const itm = items.map((item) => item);
  console.log(itm);

  const addItemToBasket = () => {
    dispatch(incrementQuantity({}));
  };

  const decreaseItems = () => {
    dispatch(decrementQuantity([itm.id]));
  };

  const remoFromCart = () => {
    dispatch(removeFromBasket([itm.id]));
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
                      <span className={styles.price}>{price}</span>
                      <span className={styles.old__price}>{price + 15}</span>
                    </div>

                    <div className={styles.btns__container}>
                      <button>-</button>
                      <span>{items.length}</span>
                      <button>+</button>

                      <div className={styles.delete__btn}>
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
    </div>
  );
}

export default basket;
