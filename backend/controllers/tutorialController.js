
// This mock data should be replaced with database queries using the Tutorial model.
import { tutorialData } from '../data/tutorials.js';

// @desc    Fetch all tutorial data
// @route   GET /api/tutorials
// @access  Public
const getTutorialData = (req, res) => {
  // In a real app, you would do something like:
  // const data = await TutorialCategory.find({}).populate('items');
  // res.json(data);
  res.json(tutorialData);
};

export { getTutorialData };
