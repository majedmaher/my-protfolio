import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // في وضع التطوير، استخدم متغير عام للحفاظ على الاتصال
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // في وضع الانتاج، أنشئ اتصال جديد
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;