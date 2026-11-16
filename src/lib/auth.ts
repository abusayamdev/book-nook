import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { jwt } from "better-auth/plugins";

import clientPromise from "@/lib/mongodb";

const client = await clientPromise;
const database = client.db(process.env.DB_NAME || "booknook");

export const auth = betterAuth({
  appName: "BookNook",

  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,

  database: mongodbAdapter(database),

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },

  plugins: [
    jwt({
      jwks: {
        keyPairConfig: {
          alg: "EdDSA",
          crv: "Ed25519",
        },
      },
    }),
  ],

  trustedOrigins: ["http://localhost:3000"],
});
