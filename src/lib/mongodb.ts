import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not configured.");
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // Reuse the MongoDB connection during development.
  clientPromise =
    global.mongoClientPromise ??
    (global.mongoClientPromise = new MongoClient(uri, options).connect());
} else {
  // Create a new connection in production.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
