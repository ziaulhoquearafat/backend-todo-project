import express from 'express';
import { createTodos } from '../controllers/todo.controllers.js';

const router = express.Router();

router.post('/', createTodos);

export default router;