import "../styles/globals.css";
//! note: this comp will apply in the entire App
import PageLayout from "../components/PageLayout";

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
