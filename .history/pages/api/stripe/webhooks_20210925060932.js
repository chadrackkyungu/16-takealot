import Stripe from "stripe";
import { buffer } from "micro";
import * as admin from "firebase-admin";

const serviceAccount = require("../../../permission.json");

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();
//end

//Establish a connection to Sripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const fulfillOrder = async (session) => {
  // console.log("Fullfill order", session);

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} had been added to the DB`);
    });
};

// ! note you can get all this code on Webhook stripe, jst go inside stripe search bar & type webhook
export default async (req, res) => {
  // here we are checking if the items are coming from stripe
  if (req.method === "POST") {
    const buf = await buffer(req);
    const signature = req.headers["stripe-signature"];

    let event;
    //Verify that the Event poste came from stripe.
    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        signature,
        webhookSecret
      );
    } catch (err) {
      // On error, log and return the error message.
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event.
    console.log("✅ Success:", event.id); //display the ID if the data was suceesfull checked from webhooks
    console.log("✅ Success:", event); //display all the data in the console

    //if the payement was successful made, then take that products and pass it to our database
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      console.log(session);

      //Fulfill the order means put it in the database
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`webhook Error: ${err.message}`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
