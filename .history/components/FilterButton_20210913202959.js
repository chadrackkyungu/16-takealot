import styles from "../styles/FilterButtons.module.css";

function FilterButton({ products }) {
  console.log(products);

  return (
    <div className={styles.filterButton}>
      <ul>
        <li>All Categories</li>
        <li> Mens</li>
        <li> Ladys </li>
        <li> Kids </li>
      </ul>
    </div>
  );
}

export default FilterButton;
// ! PART 2 NEXT JS, FETCHING DATA FROM THE API
export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return { props: { products } };
}
