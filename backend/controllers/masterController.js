import masterModel from '../models/masterModel.js';
import db from '../config/db.js';

export const getMaster = async (req, res) => {
  try {
    const categories = await masterModel.getAll(db);
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createMaster = async (req, res) => {
  try {
    const { name } = req.body;
    await masterModel.create(db, name);
    res.status(201).send('Category added.');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
