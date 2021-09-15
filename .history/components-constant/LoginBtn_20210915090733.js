import Link from "next/link";
import Image from "next/image";

// ! (1) Basic Setup
import { useUser } from "@auth0/nextjs-auth0"; //! for authentication
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function LoginBtn() {
  const { user } = useUser();
  console.log(user);
  const pic = user ? user.picture : null;

  if (!user) {
    return (
      <Link href="/api/auth/login">
        <a> Login </a>
      </Link>
    );
  } else {
    return (
      <Link href="/api/auth/logout" passHref>
        <a>
          <AccountCircleIcon fontSize="large" />
          <Image src={user.picture} alt={user.name} />
          <h2>Logout</h2>
        </a>
      </Link>
    );
  }
}

export default LoginBtn;
