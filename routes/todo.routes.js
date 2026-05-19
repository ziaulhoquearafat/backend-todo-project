import express from 'express';
import { createTodos, getTodos } from '../controllers/todo.controllers.js';

const router = express.Router();

router.post('/', createTodos);
router.get('/', getTodos);

export default router;