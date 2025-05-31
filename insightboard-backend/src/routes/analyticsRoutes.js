import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const total = await pool.query('SELECT COUNT(*) FROM exams');
    const passed = await pool.query("SELECT COUNT(*) FROM exams WHERE status = 'Passed'");
    const failed = await pool.query("SELECT COUNT(*) FROM exams WHERE status = 'Failed'");
    const average = await pool.query('SELECT AVG(score) FROM exams');

    res.json({
      total: parseInt(total.rows[0].count),
      passed: parseInt(passed.rows[0].count),
      failed: parseInt(failed.rows[0].count),
      average_score: parseFloat(average.rows[0].avg).toFixed(2)
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;
