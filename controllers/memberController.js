const Member = require('../models/Member');

exports.addMember = async (req, res) => {
  try {
    const { username, password } = req.body;
    const member = new Member({ username, password, role: 'MEMBER' });
    await member.save();
    res.status(201).json({ message: 'Member added successfully', member });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;
    const member = await Member.findByIdAndUpdate(id, { username, password }, { new: true });
    res.status(200).json({ message: 'Member updated successfully', member });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteMember = async (req, res) => {
  try {
    const { id } = req.params;
    await Member.findByIdAndDelete(id);
    res.status(200).json({ message: 'Member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json({ members });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};