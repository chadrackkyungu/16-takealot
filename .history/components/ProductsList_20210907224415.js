import Image from "next/image";
import styles from "../styles/ProductsList.module.css";
import StarIcon from "@material-ui/icons/Star";

// * img
import Banner1 from "../images/Banner/banner1.png";
import Banner2 from "../images/Banner/banner2.png";

function ProductsList() {
  return (
    <div className={styles.product__container}>
      {/* first product */}
      <div className={styles.productsList}>
        <div className={styles.product__img}>
          <Image src={Banner2} alt="logo" className={styles.img} />
          <div className={styles.btn__view}>View Product</div>
        </div>
        <div className={styles.product__category}>
          <span>Ladys</span>
        </div>

        <p className={styles.description}>
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </p>

        <div className={styles.price__and__rate}>
          <h2 className={styles.price}>R50.99</h2>

          <div className={styles.stars}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>
      {/* second product */}

      <div className={styles.productsList}>
        <div className={styles.product__img}>
          <Image src={Banner1} alt="logo" className={styles.img} />
          <div className={styles.btn__view}>View Product</div>
        </div>
        <div className={styles.product__category}>
          <span>Ladys</span>
        </div>

        <p className={styles.description}>
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </p>

        <div className={styles.price__and__rate}>
          <h2 className={styles.price}>R5.99</h2>

          <div className={styles.stars}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>

      {/* third product */}

      <div className={styles.productsList}>
        <div className={styles.product__img}>
          <Image src={Banner2} alt="logo" className={styles.img} />
          <div className={styles.btn__view}>View Product</div>
        </div>
        <div className={styles.product__category}>
          <span>Ladys</span>
        </div>

        <p className={styles.description}>
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </p>

        <div className={styles.price__and__rate}>
          <h2 className={styles.price}>R69.99</h2>

          <div className={styles.stars}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>

      <div className={styles.disclamer}>
        <span>
          Disclaimer: This is not the official Amazon Store. It is a redesign,
          built purely for educational purpose.
        </span>
      </div>
    </div>
  );
}

export default ProductsList;
