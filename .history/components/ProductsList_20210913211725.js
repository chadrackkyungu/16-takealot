import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProductsList.module.css";
import StarIcon from "@material-ui/icons/Star";

// * img
import Banner1 from "../images/Banner/banner1.png";
import Banner2 from "../images/Banner/banner2.png";

function ProductsList({ products, filterItems }) {
  const [filterCategory, setFilterCat] = useState(null);

  const filteredItems = filterCategory
    ? products.filter((product) => product.category === filterCategory)
    : products;

  return (
    <>
      {filterItems.map((category) => (
        <ul className={styles.catBtn} key={category}>
          <li onClick={() => setFilterCat(category)}>{category}</li>
        </ul>
      ))}

      {filterCategory && (
        <button onClick={() => setFilterCat(null)}> All Crimes </button>
      )}

      {filteredCrimes.map((allData) => {
        const { category, location_type, month, id } = allData;

        return (
          <div key={id} className={styles.product__container}>
            <div className={styles.productsList}>
              <div className={styles.product__img}>
                <Link
                  href="/productDetails/[id]"
                  // * this means when the user click on this item pass this path directory to this file
                  as={`/productDetails/${id}`}
                  passHref
                >
                  <Image
                    src={image}
                    alt="products"
                    className={styles.img}
                    width={500}
                    height={500}
                  />
                </Link>

                <div className={styles.btn__view}>
                  <Link
                    href="/productDetails/[id]"
                    as={`/productDetails/${id}`}
                    passHref
                  >
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
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductsList;
