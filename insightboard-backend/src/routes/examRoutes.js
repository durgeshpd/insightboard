import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const exams = await pool.query(`
      SELECT exams.*, users.name 
      FROM exams 
      JOIN users ON exams.user_id = users.id
    `);
    res.json(exams.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;
