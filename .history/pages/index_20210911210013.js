// import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import FilterButton from "../components/FilterButton";
import ProductsList from "../components/ProductsList";

export default function Home({ products }) {
  console.log(products);
  return (
    <>
      <Banner />
      <FilterButton />

      {products.map((product) => {
        const { id, title, hits, categoryId, imageUrl, likes, content } =
          product;

        return (
          <ProductsList
            key={id}
            id={id}
            title={title}
            hits={hits}
            categoryId={categoryId}
            imageUrl={imageUrl}
            likes={likes}
            content={content}
          />
        );
      })}
    </>
  );
}

// ! PART 2 NEXT JS, FETCHING DATA FROM THE API
export const getStaticProps = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);

  const products = await response.json();

  return {
    props: {
      products,
    },
  };
};
