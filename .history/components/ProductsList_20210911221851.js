import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProductsList.module.css";
import StarIcon from "@material-ui/icons/Star";

// * img
import Banner1 from "../images/Banner/banner1.png";
import Banner2 from "../images/Banner/banner2.png";

function ProductsList({
  id,
  title,
  price,
  category,
  image,
  rating,
  description,
}) {
  return (
    <>
      <div className={styles.product__container}>
        {/* first product */}
        <Link passHref href="/detailProduct" className={styles.productsList}>
          <div className={styles.product__img}>
            <Image
              src={image}
              alt="logo"
              className={styles.img}
              width={500}
              height={500}
            />

            <div className={styles.btn__view}>
              <Link passHref href="/detailProduct">
                View Product
              </Link>
            </div>
          </div>
          <div className={styles.product__category}>
            <span>{category}</span>
          </div>

          <p className={styles.description}>{description}</p>

          <div className={styles.price__and__rate}>
            <h2 className={styles.price}>R {price}</h2>

            <div className={styles.stars}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
        </Link>
      </div>
      {/* <div className={styles.disclamer}>
        <marquee>
          Disclaimer: This is not the official Takealot Store. It is a redesign,
          built purely for educational purpose.
        </marquee>
      </div> */}
    </>
  );
}

export default ProductsList;
