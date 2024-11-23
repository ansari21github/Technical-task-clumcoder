import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log('DB connected successfully');
    return db;
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    process.exit(1); 
  }
};

const db = await connectDB();

export default db;
