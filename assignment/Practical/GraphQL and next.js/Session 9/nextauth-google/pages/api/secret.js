
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  return res.status(200).json({
    message: "You have access to the secret API!",
    user: {
      name: session.user.name,
      email: session.user.email,
    },
  });
}

