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

        <div className="product__detail__description">
          <h3>Women’s Cloths</h3>

          <p>
            Great outerwear jackets for Spring/Autumn/Winter, suitable for many
            occasions, such as working, hiking, camping, mountain/rock climbing,
            cycling, traveling or other outdoors.
          </p>

          <h2 className={styles.price}>
            {" "}
            <span> R 45.99 </span> <span>R 65</span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default detailProduct;
