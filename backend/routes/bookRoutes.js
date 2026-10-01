const express = require("express");
const router = express.Router();

const Book = require("../models/book");

router.post("/", async (req, res) => {
  try {
    const {
      bookTitle,
      authorName,
      isbn,
      category,
      publicationYear
    } = req.body;

    if (
      !bookTitle ||
      !authorName ||
      !isbn ||
      !category ||
      !publicationYear
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const book = new Book({
      bookTitle,
      authorName,
      isbn,
      category,
      publicationYear
    });

    const savedBook = await book.save();

    res.status(201).json(savedBook);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;