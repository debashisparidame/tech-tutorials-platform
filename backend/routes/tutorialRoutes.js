
import express from 'express';
import { getTutorialData } from '../controllers/tutorialController.js';

const router = express.Router();

router.get('/', getTutorialData);

export default router;
