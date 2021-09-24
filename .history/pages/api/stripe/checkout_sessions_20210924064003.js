const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { items, email } = req.body;

  const transformItems = items.map((item) => ({
    description: item.description,
    quantity: item.quantity,
    price_data: {
      currency: "zar",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));

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
      email: email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
}
