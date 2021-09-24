// * STRIPE PAYMENT METHODE
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

//!  Protecting a Client-Side Rendered (CSR) Page
import { withPageAuthRequired } from "@auth0/nextjs-auth0"; //this for the authentication

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

// * Stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function Basket({ user }) {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  console.log(user);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/stripe/checkout_sessions", {
      items: items,
      // email: session.user.email,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className={styles.basket__container}>
      <div className={styles.welcom__container}>
        <Link passHref href="/">
          <p className={styles.back__btn}>Back</p>
        </Link>
        <p className={styles.user__email}>Welcome to Takealot {user.name}</p>
      </div>

      <div className={styles.cart__title}>
        {total > 0 ? "" : <h2>Your Cart is empty</h2>}
        <h3>{items.length} Items In the Cart</h3>
      </div>

      <div className={styles.cart__content}>
        {/* Display empty image if there is nothing in the cart */}
        {items.length === 0 ? (
          <div className={styles.imgEmpty}>
            <Image src={EmptyBasket} alt="logo" width={500} height={500} />
          </div>
        ) : (
          <h3></h3>
        )}

        {/* each items cart in the Box */}
        <div className={styles.cart__item__container}>
          {items.map((item) => {
            const { id, title, price, description, category, image, quantity } =
              item;
            return (
              <BasketCart
                key={id}
                id={id}
                image={image}
                price={price}
                description={description}
                title={title}
                category={category}
                quantity={quantity}
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
            // <form action="" method="POST">
            <button
              role="link"
              onClick={createCheckoutSession}
              className={styles.btn__proceed}
            >
              Proceed to Payment
            </button>
          ) : (
            // </form>
            <form>
              <button className={styles.btn__un_proceed} disabled>
                You can not Proceed with Payment
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Basket;

// ! to protect this page from seing it if the user haven't signIn you use this line of code bellow.
//Note: it merged the Prop call user imediatly amd now i can access it
export const getServerSideProps = withPageAuthRequired();
