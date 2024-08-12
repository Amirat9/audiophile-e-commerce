// data/mongoDB.ts
import mongoose from 'mongoose';

const database_uri = process.env.NEXT_PUBLIC_MONGODB_DATABASE_URI || '';

if (!database_uri) {
  console.error(
    'MongoDB URI not found. Please set NEXT_PUBLIC_MONGODB_DATABASE_URI in your environment variables.'
  );
  process.exit(1); // Exit the process if there's no database URI
}

mongoose
  .connect(database_uri)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err: any) => console.error('MongoDB connection error:', err));

export default mongoose;
