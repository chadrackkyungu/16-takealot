import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Save.module.css";
import StarIcon from "@material-ui/icons/Star";

import DoneAllIcon from "@material-ui/icons/DoneAll";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

// *Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllFav_Items,
  remoFromBookmark,
} from "../Redux/Slice/FavoriteSlice";

function Save() {
  const allFav_items = useSelector(selectAllFav_Items);
  console.log(allFav_items);

  const dispatch = useDispatch();

  return (
    <div>
      {allFav_items.length === 0 ? (
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 36,
            marginTop: 150,
          }}
        >
          Bookmark is Empty
        </h3>
      ) : (
        ""
      )}

      <div className={styles.save__container}>
        <div className={styles.welcom__container}>
          <Link passHref href="/">
            <p className={styles.back__btn}>Back</p>
          </Link>
          <p className={styles.user__email}>
            Welcome to Takealot charackkyungu624@gmail.com
          </p>
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
                  {/* <div className={styles.btn__add__container}>
                    <AddShoppingCartIcon />
                    <span>Add To Cart</span>
                  </div> */}

                  <div className={styles.btn__save}>
                    <DeleteForeverIcon
                      onClick={() => {
                        dispatch(remoFromBookmark({ id }));
                      }}
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

{
  /* <div className={styles.save__container}>
<div className={styles.welcom__container}>
  <Link passHref href="/">
    <p className={styles.back__btn}>Back</p>
  </Link>
  <p className={styles.user__email}>
    Welcome to Takealot charackkyungu624@gmail.com
  </p>
</div>

<div className={styles.product__detail__container}>
  <div className={styles.product__img}>
    <Image src={Banner3} alt="logo" className={styles.img} />
  </div>

  <div className={styles.product__detail__description}>
    <h2>Men???s Shoe</h2>

    <p>
      Great outerwear jackets for Spring/Autumn/Winter, suitable for
      many occasions, such as working, hiking, camping, mountain/rock
      climbing, cycling, traveling or other outdoors.
    </p>

    <h2 className={styles.price}>
      <span> R 45.99 </span>
      <span className={styles.old__price}>R 65</span>
    </h2>

    <div className={styles.add__to__cart}>
      <div className={styles.btn__add__container}>
        <AddShoppingCartIcon />
        <span>Add To Cart</span>
      </div>

      <div className={styles.btn__save}>
        <DeleteForeverIcon />
      </div>

      <div className={styles.btn__stars}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
    </div>
  </div>
</div>
</div> */
}
