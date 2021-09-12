// import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import FilterButton from "../components/FilterButton";
import ProductsList from "../components/ProductsList";

export default function Home({ articles }) {
  console.log(articles.imageUrl);
  return (
    <>
      <Banner />
      <FilterButton />

      {articles.map((article) => {
        const { id, title, hits, categoryId, imageUrl, likes, content } =
          article;

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
  const limit_the_Data_rendered = "?_limit=20";
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
