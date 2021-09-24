//* this page will show up after the user have successfully make payments.
import styles from "../styles/Success.module.css";

import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function Success() {
  const router = useRouter();
  return (
    <div>
      <main className={styles.Success__container}>
        <div className={styles.Success__message}>
          <div className="flex items-center space-y-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank You, your order has been confirmed
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation once item
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
