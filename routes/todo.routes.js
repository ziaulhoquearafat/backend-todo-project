import express from 'express';
import { createTodos, getAllTodos, updateTodo } from '../controllers/todo.controllers.js';

const router = express.Router();

router.post('/', createTodos);
router.get('/', getAllTodos);
router.put('/:todoId', updateTodo)

export default router;