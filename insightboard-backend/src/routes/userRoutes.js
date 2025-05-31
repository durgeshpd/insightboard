import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM users');
    res.json(users.rows);
  } catch (err) {
    console.error('Error in /api/users:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


export default router;
