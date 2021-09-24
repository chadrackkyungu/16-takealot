//* this page will show up after the user have successfully make payments.
import styles from "../styles/Success.module.css";
import { useRouter } from "next/router";

function Success() {
  const router = useRouter();
  return (
    <div>
      <main className={styles.Success__container}>
        <div className={styles.Success__message}>
          <div className={styles.Success__sms}>
            {/* <CheckCircleIcon /> */}
            <h1>Thank You, your order has been confirmed</h1>
          </div>
          <p>
            Thank you for shopping with us. We ll send a confirmation once item
            has shipped, if you would like to check the status of your order(s)
            please press the link below.
          </p>

          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
