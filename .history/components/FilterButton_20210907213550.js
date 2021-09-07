import styles from "../styles/FilterButtons.module.css";

function FilterButton() {
  return (
    <div className={styles.filterButton}>
      <ul>
        <li>All</li>
        <li> Mens</li>
        <li> Ladys </li>
        <li> Kids </li>
      </ul>
    </div>
  );
}

export default FilterButton;
