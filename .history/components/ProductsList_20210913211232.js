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
    </>
  );
}

export default ProductsList;
