import Image from "next/image";
import styles from "../styles/DetailProduct.module.css";
import StarIcon from "@material-ui/icons/Star";

// * img
import Banner4 from "../images/Banner/banner4.png";
function detailProduct() {
  return (
    <div>
      <div className="welcom__container">
        <p className={styles.back__btn}>Back</p>
        <p className={styles.user__email}>charackkyungu624@gmail.com</p>
      </div>

      <div className="product__detail__container">
        <div className="product__img">
          <Image src={Banner4} alt="logo" className={styles.img} />
        </div>
      </div>
    </div>
  );
}

export default detailProduct;
