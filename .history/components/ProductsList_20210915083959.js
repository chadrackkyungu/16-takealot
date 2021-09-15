import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProductsList.module.css";
import StarIcon from "@material-ui/icons/Star";

function ProductsList({ products, filterItems }) {
  const [filterCategory, setFilterCat] = useState(null);

  const filteredItems = filterCategory
    ? products.filter((product) => product.category === filterCategory)
    : products;

  const rate = filteredItems.map((allData) => allData.rating);

  return (
    <>
      <div className={styles.filterButton}>
        {filterCategory && (
          <ul>
            <li className={styles.btn} onClick={() => setFilterCat(null)}>
              All
            </li>
          </ul>
        )}

        {filterItems.map((category) => (
          <ul key={category}>
            <li className={styles.btn} onClick={() => setFilterCat(category)}>
              {category}
            </li>
          </ul>
        ))}
      </div>

      <div className={styles.products__items}>
        {filteredItems.map((allData) => {
          const { id, price, description, category, image } = allData;

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
                    {Array(rating)
                      .fill()
                      .map((rating, i) => (
                        // <StarIcon />
                        <p>⭐</p>
                      ))}
                    {/* <StarIcon />
                    <StarIcon /> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductsList;
