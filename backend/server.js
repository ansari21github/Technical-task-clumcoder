import express from 'express';
import dotenv from 'dotenv';
import masterRoutes from './routes/masterRoutes.js';
import detailRoutes from './routes/detailRoutes.js';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/master', masterRoutes);
app.use('/detail', detailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
