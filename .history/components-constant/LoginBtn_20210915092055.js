import Link from "next/link";
import Image from "next/image";

// ! (1) Basic Setup
import { useUser } from "@auth0/nextjs-auth0"; //! for authentication
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function LoginBtn() {
  const { user } = useUser();
  console.log(user);

  if (user) {
    return (
      <Link href="/api/auth/login">
        <a> {user ? "Login" : "Logout"} </a>
      </Link>
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
