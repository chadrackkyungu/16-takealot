import Link from "next/link";
import Image from "next/image";

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
                width={80}
                height={80}
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
