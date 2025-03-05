const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { addBook, updateBook, deleteBook, getAllBooks } = require('../controllers/bookController');

const router = express.Router();

router.post('/', authMiddleware(['LIBRARIAN']), addBook);
router.put('/:id', authMiddleware(['LIBRARIAN']), updateBook);
router.delete('/:id', authMiddleware(['LIBRARIAN']), deleteBook);
router.get('/', authMiddleware(['LIBRARIAN', 'MEMBER']), getAllBooks);

module.exports = router;