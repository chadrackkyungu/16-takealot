import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import FilterButton from "../components/FilterButton";
import ProductsList from "../components/ProductsList";

export default function Home({ products }) {
  // console.log(products);
  return (
    <>
      <Banner />
      <FilterButton
        filterItems={[...new Set(products.map((product) => product.category))]}
      />

      <div className={styles.products__items}>
        {products.map((product) => {
          const { id, title, price, description, category, image, rating } =
            product;

          return (
            <ProductsList
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              image={image}
              category={category}
            />
          );
        })}
      </div>
    </>
  );
}

// ! PART 2 NEXT JS, FETCHING DATA FROM THE API
export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return { props: { products } };
}
