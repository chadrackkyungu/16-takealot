import React, { useState } from "react";
import styles from "../styles/FilterButtons.module.css";

function FilterButton({ products, filterItems }) {
  const [filterCategory, setFilterCat] = useState(null);

  const filteredItems = filterCategory
    ? products.filter((item) => item.category === filterCategory)
    : products;

  return (
    <div className={styles.filterButton}>
      {/* loop to all data and grab me only the category and make them as btn */}
      {filterItems.map((category) => (
        <div className={styles.catBtn} key={category}>
          <button onClick={() => setFilterCat(category)}>{category}</button>
        </div>
      ))}

      {/* <ul>
        <li>All Categories</li>
        <li> Mens</li>
        <li> Ladys </li>
        <li> Kids </li>
      </ul> */}
    </div>
  );
}

export default FilterButton;
