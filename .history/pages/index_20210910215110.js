// import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import FilterButton from "../components/FilterButton";
import ProductsList from "../components/ProductsList";

export default function Home() {
  return (
    <>
      <Banner />
      <FilterButton />
      <ProductsList />
    </>
  );
}

// ! PART 2 NEXT JS, FETCHING DATA FROM THE API
export const getStaticProps = async () => {
  const limit_the_Data_rendered = "?_limit=80";
  const response = await fetch(
    `http://fakeapi.jsonparseronline.com/posts${limit_the_Data_rendered}`
  );

  const articles = await response.json();

  return {
    props: {
      articles,
    },
  };
};
