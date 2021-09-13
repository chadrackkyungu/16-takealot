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
          <div key={id} className={styles.eachCrime}>
            <h3>{category}</h3>
            <p>{location_type}</p>
            <p>{month}</p>
          </div>
        );
      })}
    </>
  );
}

export default ProductsList;
