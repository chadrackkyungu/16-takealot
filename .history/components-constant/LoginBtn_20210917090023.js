import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function LoginBtn({ useLog }) {
  const renderAuth = () => {
    if (useLog) {
      return (
        <>
          <Link href="/api/auth/logout" passHref>
            <a>
              <Image
                src={useLog.picture}
                alt={useLog.name}
                width={55}
                height={55}
                className={styles.userImg}
              />
            </a>
          </Link>
        </>
      );
    } else {
      return (
        <Link href="/api/auth/login">
          <a>
            {" "}
            <h2>Login</h2>{" "}
          </a>
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
