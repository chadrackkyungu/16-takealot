// * for authentication
import { UserProvider } from "@auth0/nextjs-auth0"; //! this for authentication

import "../styles/globals.css";
import PageLayout from "../components/PageLayout";
import { Provider } from "react-redux";
import { store } from "../Redux/Store/store";

function MyApp({ Component, pageProps }) {
  const user = pageProps; //* for the authentication

  // console.log(user);

  return (
    <UserProvider user={user}>
      <Provider store={store}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </Provider>
    </UserProvider>
  );
}

export default MyApp;
