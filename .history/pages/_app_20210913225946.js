import "../styles/globals.css";
import PageLayout from "../components/PageLayout";
import { Provider } from "react-redux";
import { store } from "../Redux/Store/store";

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </PageLayout>
  );
}

export default MyApp;
