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
    <Provider store={store}>
      <PageLayout>
        <UserProvider user={user}>
          <Component {...pageProps} />
        </UserProvider>
      </PageLayout>
    </Provider>
  );
}

export default MyApp;
