const Book = require('../models/Book');

exports.addBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = new Book({ title, author });
    await book.save();
    res.status(201).json({ message: 'Book added successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, status } = req.body;
    const book = await Book.findByIdAndUpdate(id, { title, author, status }, { new: true });
    res.status(200).json({ message: 'Book updated successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};