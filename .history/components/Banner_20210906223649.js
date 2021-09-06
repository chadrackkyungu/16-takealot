import styles from "../styles/Banner.module.css";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      {/* <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" /> */}
      <div className={styles.banner}>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          // showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <Image src={Logo} alt="logo" className={styles.img} />
          </div>
          <div>
            <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
          </div>
          <div>
            <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
