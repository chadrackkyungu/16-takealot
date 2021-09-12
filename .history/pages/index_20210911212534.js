// import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Image from "next/image";

import FilterButton from "../components/FilterButton";
import ProductsList from "../components/ProductsList";

export default function Home({ products }) {
  return (
    <>
      <Banner />
      <FilterButton />

      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <ProductsList
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

      {products.length > 0 && (
        <image src="https://links.papareact.com/dyz" alt="" />
      )}

      {products
        .slice(4, 5)
        .map(({ id, title, price, description, category, image }) => (
          <ProductsList
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }) => (
          <ProductsList
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
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
