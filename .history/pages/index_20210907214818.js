import styles from "../styles/Home.module.css";
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
