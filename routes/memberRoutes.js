const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { addMember, updateMember, deleteMember, getAllMembers } = require('../controllers/memberController');

const router = express.Router();

router.post('/', authMiddleware(['LIBRARIAN']), addMember);
router.put('/:id', authMiddleware(['LIBRARIAN']), updateMember);
router.delete('/:id', authMiddleware(['LIBRARIAN']), deleteMember);
router.get('/', authMiddleware(['LIBRARIAN']), getAllMembers);

module.exports = router;