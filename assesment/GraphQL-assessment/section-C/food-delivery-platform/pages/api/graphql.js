const menuItems = [
  {
    id: "1",
    name: "Spicy Burger",
    description: "Crispy chicken burger with lettuce and house sauce.",
    price: 12.5,
    image: "🍔",
  },
  {
    id: "2",
    name: "Garden Pizza",
    description: "Wood-fired pizza with roasted vegetables and mozzarella.",
    price: 14,
    image: "🍕",
  },
  {
    id: "3",
    name: "Berry Bowl",
    description: "Fresh fruit bowl topped with yogurt and granola.",
    price: 9.75,
    image: "🥣",
  },
];

export default function handler(req, res) {
  if (req.method !== "POST" && req.method !== "GET") {
    return res
      .status(405)
      .json({ errors: [{ message: "Method not allowed" }] });
  }

  const query =
    typeof req.body?.query === "string"
      ? req.body.query
      : typeof req.query?.query === "string"
        ? req.query.query
        : "";

  if (!query.includes("menuItems")) {
    return res
      .status(400)
      .json({ errors: [{ message: "Unsupported GraphQL query" }] });
  }

  return res.status(200).json({ data: { menuItems } });
}
