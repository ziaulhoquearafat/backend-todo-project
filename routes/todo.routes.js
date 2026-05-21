import express from 'express';
import { createTodos, deleteTodo, getAllTodos, updateTodo } from '../controllers/todo.controllers.js';

const router = express.Router();

router.post('/', createTodos);
router.get('/', getAllTodos);
router.put('/:todoId', updateTodo);
router.delete('/:todoId', deleteTodo)

export default router;