
import mongoose from 'mongoose';

const tutorialItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String, // URL to the icon image
    required: true,
  },
});

const tutorialCategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },
  items: [tutorialItemSchema],
});

const TutorialCategory = mongoose.model('TutorialCategory', tutorialCategorySchema);
const TutorialItem = mongoose.model('TutorialItem', tutorialItemSchema);

export { TutorialCategory, TutorialItem };
