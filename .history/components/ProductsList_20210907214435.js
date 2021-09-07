import Image from "next/image";
import styles from "../styles/ProductsList.module.css";

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
    </div>
  );
}

export default ProductsList;
