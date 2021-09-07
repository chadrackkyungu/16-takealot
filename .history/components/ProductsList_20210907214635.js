import Image from "next/image";
import styles from "../styles/ProductsList.module.css";
import StarIcon from "@material-ui/icons/Star";

// * img
import Banner1 from "../images/Banner/banner1.png";

function ProductsList() {
  return (
    <div className={styles.productsList}>
      <div className="product__img">
        <Image src={Banner1} alt="logo" className={styles.img} />
        <div className="btn__view">View Product</div>
      </div>
      <div className="product__category">
        <span>Ladys</span>
      </div>

      <p className="description">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </p>

      <div className="price__and__rate">
        <h2 className="price">R50.99</h2>

        <div className="stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
