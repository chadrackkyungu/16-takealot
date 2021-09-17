//! (2) Protecting a Client-Side Rendered (CSR) Page
import { withPageAuthRequired } from "@auth0/nextjs-auth0"; //this for the authentication

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Save.module.css";

import StarIcon from "@material-ui/icons/Star";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import Fav_img from "../images/favorite.png";

// *Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllFav_Items,
  removeFromBookmark,
} from "../Redux/Slice/FavoriteSlice";

function Save({ user }) {
  const dispatch = useDispatch();
  const allFav_items = useSelector(selectAllFav_Items);

  // console.log(user);

  return (
    <div>
      <div className={styles.save__container}>
        <div className={styles.welcom__container}>
          <Link passHref href="/">
            <p className={styles.back__btn}>Back</p>
          </Link>
          <p className={styles.user__email}>Welcome to Takealot {user.name}</p>
        </div>

        {allFav_items.map((Fav_item) => {
          const { id, image, description, price, title, category } = Fav_item;
          return (
            <div className={styles.product__detail__container} key={id}>
              <div className={styles.product__img}>
                <Link
                  href="/productDetails/[id]"
                  as={`/productDetails/${id}`}
                  passHref
                >
                  <Image
                    src={image}
                    alt="logo"
                    className={styles.img}
                    width={500}
                    height={500}
                  />
                </Link>

                <div className={styles.btn__view}>
                  <Link
                    href="/productDetails/[id]"
                    as={`/productDetails/${id}`}
                    passHref
                  >
                    View Product
                  </Link>
                </div>
              </div>

              <div className={styles.product__detail__description}>
                <h2>{title}</h2>
                <h3>{category}</h3>

                <p className={styles.description}>{description}</p>

                <h2 className={styles.price}>
                  <span> {price} </span>
                  <span className={styles.old__price}>R {price + 10}</span>
                </h2>

                <div className={styles.add__to__cart}>
                  <div className={styles.delete__btn}>
                    <DeleteForeverIcon
                      fontSize="large"
                      onClick={() =>
                        dispatch(dispatch(removeFromBookmark({ id })))
                      }
                    />
                  </div>

                  <div className={styles.btn__stars}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {allFav_items.length === 0 ? (
        <>
          <h3
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 36,
              marginTop: 50,
            }}
          >
            Your Bookmark is Empty
          </h3>

          <div style={{ textAlign: "center" }}>
            <Image
              src={Fav_img}
              alt="logo"
              width={150}
              height={150}
              layout="intrinsic"
            />
          </div>
        </>
      ) : (
        ""
      )}

      <div className={styles.disclamer}>
        <marquee>
          Disclaimer: This is not the official Takealot Store. It is a redesign,
          built purely for educational purpose.
        </marquee>
      </div>
    </div>
  );
}

export default Save;

// ! to protect this page from seing it if the user haven't signIn you use this line of code bellow.
//Note: it merged the Prop call user imeiatly amd now i can access it
export const getServerSideProps = withPageAuthRequired();
