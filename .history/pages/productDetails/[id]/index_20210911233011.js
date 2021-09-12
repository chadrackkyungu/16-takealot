import Link from "next/link";
import Image from "next/image";
import styles from "../styles/DetailProduct.module.css";
import StarIcon from "@material-ui/icons/Star";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

// * img
import Banner3 from "../images/Banner/banner3.png";
function detailProduct({ productDet }) {
  console.log(productDet);

  return (
    <>
      <div className={styles.detailProduct}>
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
            <h2>Women’s Cloths</h2>

            <p>
              Great outerwear jackets for Spring/Autumn/Winter, suitable for
              many occasions, such as working, hiking, camping, mountain/rock
              climbing, cycling, traveling or other outdoors.
            </p>

            <h2 className={styles.price}>
              <span> R 45.99 </span>
              <span className={styles.old__price}>R 65</span>
            </h2>

            <div className={styles.delivery}>
              <DoneAllIcon />
              <p>Free Delivery Available -Berea, South Africa </p>
            </div>
            <div className={styles.add__to__cart}>
              <div className={styles.btn__add__container}>
                <AddShoppingCartIcon />
                <span>Add To Cart</span>
              </div>

              <div className={styles.btn__save}>
                <BookmarksIcon />
              </div>

              <div className={styles.btn__stars}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.disclamer}>
        <marquee>
          Disclaimer: This is not the official Takealot Store. It is a redesign,
          built purely for educational purpose.
        </marquee>
      </div>
    </>
  );
}

export default detailProduct;

export const getStaticProps = async (context) => {
  // or => getServerSideProps
  const response = await fetch(
    `https://fakestoreapi.com/products/${context.params}`
  );
  const productDet = await response.json();
  return {
    props: {
      productDet,
    },
  };
};
