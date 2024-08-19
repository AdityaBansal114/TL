import express from 'express'
import validateUser from '../middlewares/validateUser.js';
import getStudents from '../controllers/message/getStudents.js';
import sendMessage from '../controllers/message/sendMessage.js';
import { sendMessageZodValidation } from '../middlewares/zodValidation.js';

const router= express.Router();

router.get("/getStudents",validateUser,getStudents);
router.post("/sendMessage",validateUser,sendMessageZodValidation,sendMessage);

export default router;