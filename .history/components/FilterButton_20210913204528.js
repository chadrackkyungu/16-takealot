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
        <ul className={styles.catBtn} key={category}>
          <li onClick={() => setFilterCat(category)}>{category}</li>
        </ul>
      ))}

      {/* after the user has filter on the button if he/she want to see all the data again,click on this btn */}
      {filterCategory && (
        <button onClick={() => setFilterCat(null)}> All Crimes </button>
      )}

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
