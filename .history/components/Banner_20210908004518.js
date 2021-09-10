import styles from "../styles/Banner.module.css";
import Image from "next/image";
import Banner1 from "../images/Banner/banner1.png";
import Banner2 from "../images/Banner/banner2.png";
import Banner3 from "../images/Banner/banner3.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className={styles.banner__container}>
      <div className={styles.banner}>
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={5000}
          className={styles.carouselStyle}
        >
          <div className={styles.carousel__img}>
            <Image src={Banner1} alt="logo" className={styles.img} />
          </div>
          <div className={styles.carousel__img}>
            <Image src={Banner2} alt="logo" className={styles.img} />
          </div>
          <div className={styles.carousel__img}>
            <Image src={Banner3} alt="logo" className={styles.img} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
