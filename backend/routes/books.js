const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, async (req, res) => {
  try {
    const book = new Book({ ...req.body, user: req.user.id });
    await book.save();
    res.json(book);
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const books = await Book.find({ user: req.user.id });
    res.json(books);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
