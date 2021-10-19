import db from "../Firebase";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

function Orders({ user }) {
  console.log(user.email);

  return (
    <div>
      <h1> hey </h1>
    </div>
  );
}

export default Orders;
export const getServerSideProps = withPageAuthRequired();
