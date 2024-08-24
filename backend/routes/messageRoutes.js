import express from 'express'
import validateUser from '../middlewares/validateUser.js';
import getStudents from '../controllers/message/getStudents.js';
import sendMessage from '../controllers/message/sendMessage.js';
import { sendMessageZodValidation } from '../middlewares/zodValidation.js';
import getMessages from '../controllers/message/getMessages.js';

const router= express.Router();

router.get("/getStudents",validateUser,getStudents);
router.post("/sendMessage",validateUser,sendMessageZodValidation,sendMessage);
router.post("/getMessages", validateUser,getMessages)

export default router;