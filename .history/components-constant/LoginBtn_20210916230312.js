import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Image from "next/image";

// ! (1) Basic Setup
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function LoginBtn({ useLog }) {
  console.log(useLog);

  const renderAuth = () => {
    if (typeof useLog === false) {
      return (
        <>
          <Link href="/api/auth/logout" passHref>
            <a>
              <AccountCircleIcon fontSize="large" />
              <h2>Logout</h2>
            </a>
          </Link>
        </>
      );
    } else {
      return (
        <Link href="/api/auth/login">
          <a> Login </a>
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
