import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Save.module.css";

import Banner1 from "../images/Banner/banner1.png";
import Banner2 from "../images/Banner/banner2.png";

function Save() {
  return (
    <div className={styles.save}>
      <div className={styles.welcom__container}>
        <Link passHref href="/">
          <p className={styles.back__btn}>Back</p>
        </Link>
        <p className={styles.user__email}>
          Welcome to Takealot charackkyungu624@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Save;
