const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

import { store } from "../../../Redux/Store/store";

export default async function handler(req, res) {
  const state = store.getState();
  const allItems_in_the_Basket = state.basket.items;

  const transformItems = allItems_in_the_Basket.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "zar",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));

  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: transformItems,
        payment_method_types: ["card"],

        shipping_rates: ["shr_1JTDdPDvXrFxgog6FBrpACQM"],
        shipping_address_collection: {
          allowed_countries: ["GB", "US", "CA", "ZA"],
        },

        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        metadata: {
          email: "chadrackkyungu624@gmail.com",
          images: JSON.stringify(
            allItems_in_the_Basket.map((item) => item.image)
          ),
        },
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
