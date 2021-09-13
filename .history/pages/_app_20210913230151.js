import "../styles/globals.css";
import PageLayout from "../components/PageLayout";
import { Provider } from "react-redux";
import { store } from "../Redux/Store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </Provider>
  );
}

export default MyApp;
