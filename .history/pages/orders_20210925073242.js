import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

// import db from "../Firebase";
import db from "../Firebase";
// import Header from './Header';
// import Order from "../components/Order";
// import moment from 'moment';
import { useRouter } from "next/router";

function Orders({ orders }) {
  const router = useRouter();

  console.log(orders);

  return (
    <div>
      {/* <Header /> */}
      <main>
        <h1>Your orders</h1>

        {orders ? (
          <h2>
            {orders.length > 0 ? (
              <>
                {orders.length} Order{orders.length > 1 && "s"}
              </>
            ) : (
              <>
                You don t have any order yet. Go visit the
                <button
                  onClick={() => router.push("/")}
                  // className="link text-yellow-400 underline hover:no-underline"
                >
                  Homepage Store
                </button>
                to purchase some items.
              </>
            )}
          </h2>
        ) : (
          <h2>Please sign in to see your orders.</h2>
        )}

        {/* <div className="mt-5 space-y-4">
          {orders?.map((order) => (
            <Order
              key={order.id}
              id={order.id}
              amount={order.amount}
              amountShipping={order.amountShipping}
              images={order.images}
              timestamp={order.timestamp}
              items={order.items}
            />
          ))}
        </div> */}
      </main>
    </div>
  );
}

export default Orders;

// Tells nextJS that's no longer a static page
// eg "Please calculate smthg and send it to the user next"
// Here, it's executed by Node.js
export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // Get the user logged in credentials...
  // const session = await getSession(context);

  // if (!session) {
  //   return { props: {} };
  // }

  const userData = collection(db, "users");
  const userColl = collection(userData);
  const stripeOrders = await getDocs(userColl);

  //Firebase db
  // const stripeOrders = await db
  //   .collection("users")
  //   .doc(session.user.email)
  //   .collection("orders")
  //   .orderBy("timestamp", "desc")
  //   .get();

  //Stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return { props: { orders } }; //this pass all the order to the comp As a props
}
