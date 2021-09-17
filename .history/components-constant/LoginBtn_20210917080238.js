import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Image from "next/image";

// ! (1) Basic Setup
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function LoginBtn({ useLog }) {
  const renderAuth = () => {
    if (useLog) {
      return (
        <>
          <Link href="/api/auth/logout" passHref>
            <a>
              {/* <AccountCircleIcon fontSize="large" /> */}
              <Image
                src={useLog.picture}
                alt={useLog.name}
                width={50}
                height={50}
                // quality
              />
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

{
  /* <Image
            src={user.picture}
            alt={user.name}
            width={100}
            height={100}
            quality
          /> */
}
