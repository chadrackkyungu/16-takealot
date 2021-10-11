// * for authentication
import { UserProvider } from "@auth0/nextjs-auth0"; //! this for authentication

import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import PageLayout from "../components/PageLayout";
import { Provider } from "react-redux";
import { store } from "../Redux/Store/store";

function MyApp({ Component, pageProps }) {
  const { user } = pageProps; //* for the authentication

  // console.log(user);

  return (
    <SessionProvider session={session}>
      <UserProvider user={user}>
        <Provider store={store}>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </Provider>
      </UserProvider>
    </SessionProvider>
  );
}

export default MyApp;
