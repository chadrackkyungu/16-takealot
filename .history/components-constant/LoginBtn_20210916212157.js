import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ! (1) Basic Setup
import { useUser } from "@auth0/nextjs-auth0"; //! for authentication
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function LoginBtn({ user }) {
  const { logIn, setLogin } = useState(true);

  // const { user } = useUser();
  // console.log(user);

  const renderAuth = () => {
    if (user) {
      return (
        <>
          <Link href="/api/auth/login">
            <a> Login </a>
          </Link>
        </>
      );
    } else {
      return (
        <Link href="/api/auth/logout" passHref>
          <a>
            <AccountCircleIcon fontSize="large" />
            <h2>Logout</h2>
          </a>
        </Link>
      );
    }
  };

  return <>{renderAuth()}</>;
}

export default LoginBtn;
export const getServerSideProps = withPageAuthRequired();
{
  /* <Image
            src={user.picture}
            alt={user.name}
            width={100}
            height={100}
            quality
          /> */
}
