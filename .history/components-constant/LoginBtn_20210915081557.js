import Link from "next/link";
// ! (1) Basic Setup
import { useUser } from "@auth0/nextjs-auth0"; //! for authentication
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function LoginBtn() {
  const { user, error, isLoading } = useUser();
  // console.log(user);

  if (user)
    return (
      <div>
        <Link href="/api/auth/login" passHref>
          <a>
            <AccountCircleIcon fontSize="large" />
          </a>
        </Link>
      </div>
    );
}

export default LoginBtn;
