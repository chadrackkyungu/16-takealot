const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
];

import Stripe_store from "../../../Redux/Store/Stripe_store";

export default async function handler(req, res) {
  const state = Stripe_store.getState();
  console.log(state);

  const transformItems = products.map((item) => ({
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
          images: JSON.stringify(products.map((item) => item.image)),
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
