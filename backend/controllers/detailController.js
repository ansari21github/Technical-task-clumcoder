import detailModel from '../models/detailModel.js';
import db from '../config/db.js';

export const getDetails = async (req, res) => {
  try {
    const questions = await detailModel.getAll(db);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createDetail = async (req, res) => {
  try {
    const { question, category_id } = req.body;
    await detailModel.create(db, question, category_id);
    res.status(201).send('Question added.');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
