const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { items } = req.body;

  console.log(items);

  const transformItems = items.map((item) => ({
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

  if (items) {
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
          images: JSON.stringify(items.map((item) => item.image)),
        },
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "post");
    res.status(405).end("Method Not Allowed");
  }
}
